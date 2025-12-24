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
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const res = await getCurrentUser();

      if (res?.data?.authenticated) {
        setUser(res.data.user);
      } else {
        setUser(null);
      }

      setLoading(false);
    };

    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
