"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaLock,
  FaPen,
  FaSearch,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaHome,
  FaList,
  FaBuilding,
  FaImages,
  FaBlog,
  FaPhone,
} from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50">
        {/* TOP BAR (desktop only) */}
        <div className="hidden md:block bg-gray-900 text-gray-200 text-sm">
          <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
            <ul className="flex items-center gap-6">
              <li className="flex items-center gap-2">
                <FaPhoneAlt /> 1-800-555-1234
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope /> info@example.com
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt /> Los Angeles, US
              </li>
            </ul>

            <div className="flex items-center gap-4">
              <div className="flex gap-3">
                <Link href="#">
                  <FaFacebookF />
                </Link>
                <Link href="#">
                  <FaTwitter />
                </Link>
                <Link href="#">
                  <FaInstagram />
                </Link>
                <Link href="#">
                  <FaLinkedinIn />
                </Link>
              </div>

              <div className="flex items-center gap-2">
                <Link href="/auth/login" className="flex items-center gap-1">
                  <FaLock /> Login
                </Link>
                <span>|</span>
                <Link href="/auth/register" className="flex items-center gap-1">
                  <FaPen /> Register
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* NAVBAR */}
        <nav className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/69/69524.png"
                alt="Logo"
                className="h-8 w-8"
              />
              <span className="text-lg font-semibold text-gray-800">
                RealEstate
              </span>
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-6 font-medium">
              {["Home", "Listing", "Property", "Gallery", "Blog"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase()}`}
                      className="flex items-center gap-1 hover:text-blue-600"
                    >
                      {item}
                      <FaChevronDown className="text-xs" />
                    </Link>
                  </li>
                )
              )}
              <li>
                <Link href="/contact-us" className="hover:text-blue-600">
                  Contact
                </Link>
              </li>
            </ul>

            {/* Desktop Search */}
            <div className="hidden lg:flex items-center border rounded overflow-hidden">
              <input
                type="search"
                placeholder="Search..."
                className="px-3 py-1 outline-none"
              />
              <button className="px-3 text-gray-600">
                <FaSearch />
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden text-2xl"
              onClick={() => setMenuOpen(true)}
            >
              <FaBars />
            </button>
          </div>
        </nav>
      </header>

      {/* MOBILE OVERLAY MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMenuOpen(false)}
          />

          {/* Drawer */}
          <div className="absolute top-0 right-0 h-full w-full bg-white animate-slide-in">
            {/* Drawer Header */}
            <div className="h-16 px-4 flex items-center justify-between bg-white shadow">
              <Link href="/" className="flex items-center gap-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/69/69524.png"
                  className="h-8 w-8"
                />
                <span className="text-lg font-semibold text-gray-800">
                RealEstate
              </span>
              </Link>

              <button className="text-2xl" onClick={() => setMenuOpen(false)}>
                <FaTimes />
              </button>
            </div>

            {/* Mobile Menu Items */}
            <nav className="p-6 space-y-4">
              <MobileItem icon={<FaHome />} label="Home" />
              <MobileItem icon={<FaList />} label="Listing" />
              <MobileItem icon={<FaBuilding />} label="Property" />
              <MobileItem icon={<FaImages />} label="Gallery" />
              <MobileItem icon={<FaBlog />} label="Blog" />
              <MobileItem icon={<FaPhone />} label="Contact" />
            </nav>
          </div>
        </div>
      )}

      {/* Spacer for fixed header */}
      <div className="h-16 md:h-[112px]" />

      {/* Animation */}
      <style jsx>{`
        .animate-slide-in {
          animation: slideIn 0.3s ease-out forwards;
        }
        @keyframes slideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}

/* Mobile Menu Item */
function MobileItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <Link
      href="#"
      className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition"
    >
      <span className="text-xl text-indigo-600">{icon}</span>
      <span className="font-medium text-gray-800">{label}</span>
    </Link>
  );
}
