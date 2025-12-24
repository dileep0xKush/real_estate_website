"use client";

import Header from "../(site)/layouts/Header";
import Footer from "../(site)/layouts/Footer";
import type { ReactNode } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthProvider";

export default function SiteLayout({ children }: { children: ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/auth/login");
    }
  }, [user, loading, router]);

  if (loading) return null;

  if (!user) return null;

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
