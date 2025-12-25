"use client";

import { useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  ShoppingBag,
  Users,
  BarChart3,
  Menu,
} from "lucide-react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden fixed top-3 left-3 z-50 p-2 bg-gray-900 text-white rounded-lg"
      >
        <Menu size={18} />
      </button>

      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white shadow-xl flex flex-col transition-transform z-40
        ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <div className="h-16 flex items-center justify-between px-5 border-b border-white/10">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/69/69524.png"
              className="h-7 w-7 invert"
              alt="Logo"
            />
            <span className="font-semibold">RealEstate Admin</span>
          </Link>

          <button
            onClick={() => setOpen(false)}
            className="md:hidden p-1 text-gray-300"
          >
            ✕
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-2">
          <NavItem href="/admin" icon={<LayoutDashboard size={18} />} active>
            Dashboard
          </NavItem>

          <NavItem href="#" icon={<ShoppingBag size={18} />}>
            eCommerce
          </NavItem>

          <NavItem href="#" icon={<BarChart3 size={18} />}>
            Analytics
          </NavItem>

          <NavItem href="#" icon={<Users size={18} />}>
            Users
          </NavItem>
        </nav>
      </aside>
    </>
  );
}

function NavItem({
  href,
  icon,
  children,
  active,
}: {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-2 px-3 py-2 rounded-lg
      ${active ? "bg-white/15" : "bg-white/5 hover:bg-white/10"}`}
    >
      {icon}
      <span className="text-sm">{children}</span>
    </Link>
  );
}
