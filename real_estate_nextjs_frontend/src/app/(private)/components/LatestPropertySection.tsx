"use client";

import Link from "next/link";

export default function LatestPropertySection() {
  const properties = [
    {
      img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
      title: "Oceanfront Apartment",
      address: "Brooklyn, NY",
      price: "$1,600",
      meta: "4 bds · 4 ba · 2500 Sqft",
    },
    {
      img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
      title: "Family Condo",
      address: "Missouri, US",
      price: "$1,700",
      meta: "8 bds · 8 ba · 2900 Sqft",
    },
    {
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      title: "Modern Home",
      address: "New York, US",
      price: "$1,750",
      meta: "5 bds · 6 ba · 2700 Sqft",
    },
    {
      img: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&q=80",
      title: "Family House",
      address: "Chicago, US",
      price: "$1,400",
      meta: "2 bds · 2 ba · 2200 Sqft",
    },
  ];

  return (
    <section className="py-20 bg-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800">
            Latest Listings
          </h2>
          <p className="text-gray-500 mt-2">
            Discover our newest properties
          </p>
        </div>

        {/* Marquee */}
        <div className="relative overflow-hidden">
          <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused]">
            {[...properties, ...properties].map((item, index) => (
              <div
                key={index}
                className="w-[320px] bg-white rounded-xl shadow hover:shadow-xl transition flex-shrink-0"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-52 object-cover rounded-t-xl"
                />

                <div className="p-5">
                  <h3 className="font-semibold text-lg mb-1">
                    <Link href="/property" className="hover:text-blue-600">
                      {item.title}
                    </Link>
                  </h3>

                  <p className="text-sm text-gray-500 mb-3">
                    {item.address}
                  </p>

                  <div className="flex justify-between items-center">
                    <span className="text-blue-600 font-semibold text-lg">
                      {item.price}
                    </span>
                    <span className="text-sm text-gray-500">
                      {item.meta}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
