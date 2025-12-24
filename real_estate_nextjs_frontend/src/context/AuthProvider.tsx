"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { getCurrentUser } from "@/services/auth";

type User = {
  userId: number;
  email: string;
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
  refreshUser: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  refreshUser: async () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const refreshUser = async () => {
    const res = await getCurrentUser();

    if (res?.data?.authenticated) {
      setUser(res.data.user);
    } else {
      setUser(null);
    }

    setLoading(false);
  };

  useEffect(() => {
    let mounted = true;

    (async () => {
      if (!mounted) return;

      const res = await getCurrentUser();

      if (!mounted) return;

      if (res?.data?.authenticated) {
        setUser(res.data.user);
      } else {
        setUser(null);
      }

      setLoading(false);
    })();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        refreshUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
