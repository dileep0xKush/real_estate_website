"use client";

import { FaMedal, FaThumbsUp } from "react-icons/fa";

export default function AboutUsSection() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-semibold text-gray-800">About Us</h2>
          <p className="text-gray-500 mt-2 max-w-xl mx-auto">
            Duis aute irure dolor in reprehed in volupted velit esse dolore
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1560185008-b033106af5c3?w=900&q=80"
              alt="About our company"
              className="rounded-xl shadow-lg object-cover w-full h-[420px]"
            />
          </div>

          {/* Text */}
          <div>
            <h3 className="text-blue-600 font-semibold uppercase tracking-wide mb-2">
              Who We Are
            </h3>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 leading-snug">
              Best & Award Winning <br />
              Real Estate Business in USA
            </h2>

            <p className="text-gray-600 leading-relaxed mb-8">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
              nostrum, doloremque quaerat sit tempora eius est reiciendis
              accusamus magnam quae. Explicabo dolore officia, iure a ullam
              aliquam nemo excepturi, repellat.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Feature 1 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white text-xl flex-shrink-0">
                  <FaMedal />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">
                    Certified Company
                  </h4>
                  <p className="text-sm text-gray-600">
                    We generate sitemaps, submit to search engines, and track
                    crawler access.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white text-xl flex-shrink-0">
                  <FaThumbsUp />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">
                    Highly Experienced
                  </h4>
                  <p className="text-sm text-gray-600">
                    Our expert team ensures smooth, reliable, and trusted real
                    estate services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
