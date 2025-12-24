// src/app/layout.tsx
import type { ReactNode } from "react";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "@/context/AuthProvider";

export const metadata = {
  title: "Real Estate App",
  description: "Modern real estate platform",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="min-h-screen">
        <AuthProvider>
          {children}

          <ToastContainer
            position="top-right"
            autoClose={3000}
            newestOnTop
            pauseOnHover
            draggable
            theme="colored"
          />
        </AuthProvider>
      </body>
    </html>
  );
}
