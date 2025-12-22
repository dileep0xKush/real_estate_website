"use client";

import { FaSearch } from "react-icons/fa";
import { useState } from "react";

export default function SearchProperties() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      className="relative py-20 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1560185008-b033106af5c3?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-white">
            Search Properties
          </h2>
        </div>

        {/* Search Box */}
        <div className="bg-white rounded-lg shadow p-6">
          {/* Main Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <select className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Actions</option>
              <option>Rentals (12)</option>
              <option>Sales (17)</option>
            </select>

            <select className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Types</option>
              <option>Apartments (3)</option>
              <option>Houses (2)</option>
              <option>Condos (1)</option>
              <option>Industrial (2)</option>
              <option>Land (3)</option>
              <option>Offices (1)</option>
              <option>Retail (2)</option>
              <option>Villas (1)</option>
            </select>

            <select className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Cities</option>
              <option>New York</option>
              <option>California</option>
              <option>Washington</option>
              <option>Chicago</option>
              <option>Phoenix</option>
              <option>Birmingham</option>
            </select>

            <button className="bg-gray-900 flex items-center justify-center  text-white rounded px-6 py-2">
              <FaSearch />
              Search
            </button>
          </div>

          {/* More Options */}
          {showMore && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              <select className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>All Area</option>
                <option>San Jose</option>
                <option>Salt Lake City</option>
                <option>Las Vegas</option>
                <option>Boston</option>
                <option>Tampa</option>
                <option>Orlando</option>
              </select>

              <select className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Bedrooms</option>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((b) => (
                  <option key={b}>{b}</option>
                ))}
              </select>

              <input
                type="text"
                placeholder="Price range"
                className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}

          {/* Toggle */}
          <div className="mt-4">
            <button
              onClick={() => setShowMore(!showMore)}
              className="text-blue-600 hover:underline text-sm"
            >
              {showMore ? "Less options" : "More options"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
