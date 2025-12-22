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
  FaChevronDown,
} from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-gray-900 text-gray-200 text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Left */}
          <ul className="flex flex-wrap items-center gap-4">
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> 1-800-555-1234
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> info@example.com
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> York Blvd, Los Angeles, US
            </li>
          </ul>

          {/* Right */}
          <div className="flex items-center gap-4">
            <div className="flex gap-3">
              <Link href="#" className="hover:text-white">
                <FaFacebookF />
              </Link>
              <Link href="#" className="hover:text-white">
                <FaTwitter />
              </Link>
              <Link href="#" className="hover:text-white">
                <FaInstagram />
              </Link>
              <Link href="#" className="hover:text-white">
                <FaLinkedinIn />
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <Link
                href="/auth/login"
                className="flex items-center gap-1 hover:text-white"
              >
                <FaLock /> Log In
              </Link>
              <span>|</span>
              <Link
                href="/auth/register"
                className="flex items-center gap-1 hover:text-white"
              >
                <FaPen /> Register
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src="/assets/img/logo.png" alt="Logo" className="h-8" />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-6 font-medium">
            {[
              { name: "Home", href: "/" },
              { name: "Listing", href: "/listing" },
              { name: "Property", href: "/property" },
              { name: "Gallery", href: "/gallery" },
              { name: "Pages", href: "#" },
              { name: "Blog", href: "/blog" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="flex items-center gap-1 hover:text-blue-600"
                >
                  {item.name}
                  <FaChevronDown className="text-xs" />
                </Link>
              </li>
            ))}

            <li>
              <Link href="/contact-us" className="hover:text-blue-600">
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Search */}
          <div className="hidden lg:flex items-center border rounded overflow-hidden">
            <input
              type="search"
              placeholder="Search here"
              className="px-3 py-1 outline-none"
            />
            <button className="px-3 text-gray-600 hover:text-black">
              <FaSearch />
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FaBars />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t">
            <ul className="flex flex-col divide-y">
              <li className="p-4">
                <Link href="/">Home</Link>
              </li>
              <li className="p-4">
                <Link href="/listing">Listing</Link>
              </li>
              <li className="p-4">
                <Link href="/property">Property</Link>
              </li>
              <li className="p-4">
                <Link href="/gallery">Gallery</Link>
              </li>
              <li className="p-4">
                <Link href="/blog">Blog</Link>
              </li>
              <li className="p-4">
                <Link href="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
