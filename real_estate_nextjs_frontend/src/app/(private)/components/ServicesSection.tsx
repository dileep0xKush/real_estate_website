"use client";

import {
  FaCouch,
  FaCrown,
  FaLayerGroup,
  FaBolt,
  FaLeaf,
  FaMedal,
} from "react-icons/fa";

export default function ServicesSection() {
  const services = [
    {
      title: "Full Furnished",
      icon: FaCouch,
      desc: "Fully furnished properties with modern furniture and premium fittings.",
    },
    {
      title: "Royal Touch Paint",
      icon: FaCrown,
      desc: "Premium quality paint and finishes that give your home a royal feel.",
    },
    {
      title: "Latest Interior Design",
      icon: FaLayerGroup,
      desc: "Contemporary interior designs crafted by professional designers.",
    },
    {
      title: "Non Stop Security",
      icon: FaBolt,
      desc: "24/7 security systems ensuring safety and peace of mind.",
    },
    {
      title: "Living Inside Nature",
      icon: FaLeaf,
      desc: "Green surroundings and eco-friendly living environments.",
    },
    {
      title: "Luxurious Fittings",
      icon: FaMedal,
      desc: "High-end fittings and fixtures designed for luxury living.",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-semibold text-gray-800">
            Common Features
          </h2>
          <p className="text-gray-500 mt-2 max-w-xl mx-auto">
            Duis aute irure dolor in reprehed in volupted velit esse dolore
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl p-8 text-center shadow hover:shadow-xl transition"
              >
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-blue-600 text-white text-2xl group-hover:scale-110 transition">
                  <Icon />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
