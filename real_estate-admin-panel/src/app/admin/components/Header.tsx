"use client";

import { useEffect, useState } from "react";
import { Bell, ChevronDown, User } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleString("en-GB", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };

    update();
    const i = setInterval(update, 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <header className="h-16 sticky top-0 z-40 bg-gray-900 text-white">
      <div className="h-full flex items-center justify-between px-4 md:px-6">
        <h1 className="text-sm md:text-base font-semibold">{time}</h1>

        <div className="flex items-center gap-3">
          <IconButton>
            <Bell size={18} />
            <span className="absolute -top-1 -right-1 bg-red-600 text-[10px] px-1.5 rounded-full">
              3
            </span>
          </IconButton>

          <div className="relative">
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20"
            >
              <User size={16} />
              <span className="hidden md:block text-sm">Admin</span>
              <ChevronDown size={14} />
            </button>

            {menuOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white text-gray-900 rounded-lg shadow-lg py-2 text-sm">
                <DropItem label="Profile" />
                <DropItem label="Settings" />
                <DropItem label="Logout" danger />
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

function IconButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="relative p-2 rounded-lg bg-white/10 hover:bg-white/20"
    >
      {children}
    </button>
  );
}

function DropItem({ label, danger }: { label: string; danger?: boolean }) {
  return (
    <button
      className={`w-full px-3 py-2 text-left hover:bg-gray-100 ${
        danger ? "text-red-600" : ""
      }`}
    >
      {label}
    </button>
  );
}
