"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 pt-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-16">
            {/* About */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">
                About <span className="text-blue-500">Us</span>
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="#" className="hover:text-white">
                    Company
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Career
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Graphic Design
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>

            {/* Useful Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">
                Useful <span className="text-blue-500">Links</span>
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="#" className="hover:text-white">
                    Bayonne, New York
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Greenville, Chicago
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    The Heights, New Jersey
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Washington DC
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    San Francisco
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">
                Contact <span className="text-blue-500">Info</span>
              </h3>
              <ul className="space-y-4 text-sm">
                <li className="flex gap-3">
                  <FaMapMarkerAlt className="mt-1 text-blue-500" />
                  <span>
                    York Blvd, Los Angeles, US <br /> View, CA 94041
                  </span>
                </li>
                <li className="flex gap-3">
                  <FaPhoneAlt className="text-blue-500" />
                  (518) 2014-040 43
                </li>
                <li className="flex gap-3">
                  <FaEnvelope className="text-blue-500" />
                  hello@example.com
                </li>
              </ul>
            </div>

            {/* Subscribe */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">
                Subscribe <span className="text-blue-500">News</span>
              </h3>

              <form className="flex mb-6">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full px-4 py-2 rounded-l bg-gray-800 text-sm outline-none"
                />
                <button className="bg-blue-600 px-4 rounded-r hover:bg-blue-700 transition">
                  <FaEnvelope />
                </button>
              </form>

              <div className="flex gap-4">
                {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
                  (Icon, i) => (
                    <Link
                      key={i}
                      href="#"
                      className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition"
                    >
                      <Icon />
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 py-6">
          <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-400">
            © {new Date().getFullYear()}{" "}
            <a
              href="https://uideck.com"
              target="_blank"
              rel="nofollow noreferrer"
              className="hover:text-white"
            >
              UIdeck
            </a>{" "}
            — All Rights Reserved
          </div>
        </div>
      </footer>
    </>
  );
}
