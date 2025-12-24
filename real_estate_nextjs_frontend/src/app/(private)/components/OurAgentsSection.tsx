"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function OurAgentsSection() {
  const agents = [
    {
      name: "David Givens",
      role: "Real Estate Agent",
      img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=600&q=80",
    },
    {
      name: "John Doe",
      role: "Senior Property Consultant",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80",
    },
    {
      name: "Darrell S. Allen",
      role: "Luxury Property Expert",
      img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=600&q=80",
    },
    {
      name: "Justyna Michallek",
      role: "Real Estate Agent",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800">Our Agents</h2>
          <p className="text-gray-500 mt-2">
            Duis aute irure dolor in reprehed in volupted velit esse dolore
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {agents.map((agent, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-xl shadow hover:shadow-xl transition overflow-hidden"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={agent.img}
                  alt={agent.name}
                  className="w-full h-72 object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <div className="flex gap-3">
                    {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
                      (Icon, i) => (
                        <Link
                          key={i}
                          href="#"
                          className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-800 hover:bg-blue-600 hover:text-white transition"
                        >
                          <Icon />
                        </Link>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {agent.name}
                </h3>
                <p className="text-sm text-gray-500">{agent.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/agents"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded hover:bg-blue-700 transition"
          >
            View All Agents
          </Link>
        </div>
      </div>
    </section>
  );
}
