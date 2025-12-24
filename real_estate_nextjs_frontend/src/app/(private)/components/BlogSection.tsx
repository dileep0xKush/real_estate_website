"use client";

import Link from "next/link";
import { FaUser, FaHeart, FaComment } from "react-icons/fa";

export default function BlogSection() {
  const blogs = [
    {
      title: "Visual Design Concept",
      date: "12 April, 2018",
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias laudantium fugiat.",
    },
    {
      title: "Real Estate Festival - 2018",
      date: "12 April, 2018",
      img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias laudantium fugiat.",
    },
    {
      title: "Latest Architectural Design",
      date: "12 April, 2018",
      img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias laudantium fugiat.",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-semibold text-gray-800">The Blog</h2>
          <p className="text-gray-500 mt-2 max-w-xl mx-auto">
            Duis aute irure dolor in reprehed in volupted velit esse dolore
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-56 object-cover"
                />
                <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-3 py-1 rounded">
                  {post.date}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-3">
                  <Link href="/blog" className="hover:text-blue-600 transition">
                    {post.title}
                  </Link>
                </h3>

                <p className="text-gray-600 text-sm mb-6">{post.desc}</p>

                {/* Footer */}
                <div className="flex items-center justify-between text-sm text-gray-500 border-t pt-4">
                  <span className="flex items-center gap-2">
                    <FaUser /> Admin
                  </span>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <FaHeart /> 350
                    </span>
                    <span className="flex items-center gap-1">
                      <FaComment /> 30
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded hover:bg-blue-700 transition"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
}
