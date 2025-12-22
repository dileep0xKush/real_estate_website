"use client";

import { useEffect, useState } from "react";
import { FaUsers, FaBuilding, FaKey, FaTrophy } from "react-icons/fa";

function Counter({ end }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return <span>{count.toLocaleString()}</span>;
}

export default function CounterSection() {
  const stats = [
    {
      icon: FaUsers,
      value: 6252,
      label: "Happy Customers",
    },
    {
      icon: FaBuilding,
      value: 3091,
      label: "Completed Projects",
    },
    {
      icon: FaKey,
      value: 1200,
      label: "Property Sold",
    },
    {
      icon: FaTrophy,
      value: 79,
      label: "Awards Won",
    },
  ];

  return (
    <section
      className="relative py-20 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1600&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/80"></div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="text-white">
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-white/20 text-3xl">
                  <Icon />
                </div>

                {/* Counter */}
                <h3 className="text-4xl font-bold mb-2">
                  <Counter end={item.value} />
                </h3>

                {/* Label */}
                <p className="text-gray-200 text-sm tracking-wide uppercase">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
