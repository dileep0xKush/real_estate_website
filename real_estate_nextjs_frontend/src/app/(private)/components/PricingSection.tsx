"use client";

import { FaCheckCircle } from "react-icons/fa";

export default function PricingSection() {
  const plans = [
    {
      name: "Personal",
      price: 99,
      period: "No discount on renewal",
      features: [
        "Ad Visibility: 3 Months",
        "Number of Ads: 15",
        "Featured Ads: 5",
      ],
      popular: false,
    },
    {
      name: "Business",
      price: 199,
      period: "10% discount on renewal",
      features: [
        "Ad Visibility: 5 Months",
        "Number of Ads: 50",
        "Featured Ads: 10",
      ],
      popular: true,
    },
    {
      name: "Ultimate",
      price: 999,
      period: "20% discount on renewal",
      features: [
        "Ad Visibility: 12 Months",
        "Number of Ads: 100",
        "Featured Ads: 30",
      ],
      popular: false,
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-semibold text-gray-800">
            Pricing Plans
          </h2>
          <p className="text-gray-500 mt-2 max-w-xl mx-auto">
            Duis aute irure dolor in reprehed in volupted velit esse dolore
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-xl shadow-lg bg-white p-8 text-center transition ${
                plan.popular
                  ? "border-2 border-blue-600 scale-105"
                  : "hover:shadow-xl"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              {/* Header */}
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-4">
                <span className="text-4xl font-bold text-gray-900">
                  ${plan.price}
                </span>
                <p className="text-sm text-gray-500 mt-1">{plan.period}</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 text-left">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600">
                    <FaCheckCircle className="text-blue-600" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#"
                className={`inline-block w-full py-3 rounded-lg font-semibold transition ${
                  plan.popular
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                Get Started Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
