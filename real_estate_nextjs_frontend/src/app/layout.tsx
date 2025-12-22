// src/app/layout.tsx
import type { ReactNode } from "react";
import "./globals.css";
import Providers from "./providers";

export const metadata = {
  title: "Real Estate App",
  description: "Modern real estate platform",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="min-h-screen">
        {children}

        {/* Client-side providers (Toast, etc.) */}
        <Providers />
      </body>
    </html>
  );
}
