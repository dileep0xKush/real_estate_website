"use client";

import Link from "next/link";

export default function RealEstateDashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* IMPORTANT: header height compensation */}
      <main className="max-w-7xl mx-auto px-6 pt-[20px] pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT: Dashboard Content */}
          <div className="lg:col-span-8 space-y-10">
            {/* KPI Cards */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Kpi title="Total Properties" value="128" note="+8 this month" />
              <Kpi title="Active Listings" value="92" note="71% active" />
              <Kpi title="Property Views" value="18,420" note="+12% growth" />
              <Kpi title="New Leads" value="36" note="Last 30 days" />
            </section>

            {/* Listings */}
            <section>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  Featured Listings
                </h2>
                <Link
                  href="#"
                  className="text-sm text-indigo-600 hover:underline"
                >
                  View all
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {properties.map((p, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
                  >
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-48 w-full object-cover"
                    />

                    <div className="p-4">
                      <h3 className="font-semibold text-gray-800">{p.title}</h3>
                      <p className="text-sm text-gray-500">{p.location}</p>
                      <p className="text-lg font-bold text-indigo-600 mt-2">
                        {p.price}
                      </p>

                      <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Performance */}
            <section className="bg-white rounded-xl shadow p-6">
              <h3 className="font-semibold text-gray-800 mb-4">
                Performance Overview
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <Metric label="Avg Property Price" value="$1.2M" />
                <Metric label="Avg Days on Market" value="24 Days" />
                <Metric label="Conversion Rate" value="4.8%" />
              </div>
            </section>
          </div>

          <aside className="lg:col-span-4">
            <div className="bg-white rounded-xl shadow p-6">
              <div className="text-center">
                <img
                  src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39"
                  alt="Avatar"
                  className="w-24 h-24 rounded-full mx-auto object-cover"
                />
                <h3 className="mt-4 text-xl font-semibold">
                  Justyna Michallek
                </h3>
                <p className="text-gray-500 text-sm">Real Estate Agent</p>
              </div>

              <nav className="mt-6 space-y-2">
                {[
                  ["Dashboard", "/dashboard"],
                  ["Profile", "/user-profile"],
                  ["My Properties", "/my-properties"],
                  ["Favorites", "/favorites"],
                  ["Submit Property", "/submit-property"],
                  ["Change Password", "/change-password"],
                ].map(([label, href]) => (
                  <Link
                    key={label}
                    href={href}
                    className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition"
                  >
                    {label}
                  </Link>
                ))}

                <Link
                  href="/"
                  className="block px-4 py-2 rounded-lg text-red-500 hover:bg-red-50 transition"
                >
                  Log Out
                </Link>
              </nav>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

/* ===== Components ===== */

function Kpi({
  title,
  value,
  note,
}: {
  title: string;
  value: string;
  note: string;
}) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <p className="text-sm text-gray-500">{title}</p>
      <h3 className="text-2xl font-bold text-gray-800 mt-1">{value}</h3>
      <p className="text-xs text-green-600 mt-1">{note}</p>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="border rounded-lg p-4">
      <p className="text-sm text-gray-500">{label}</p>
      <h4 className="text-xl font-semibold text-gray-800 mt-1">{value}</h4>
    </div>
  );
}

function SidebarLink({ label, danger }: { label: string; danger?: boolean }) {
  return (
    <Link
      href="#"
      className={`block px-4 py-2 rounded-lg text-sm transition ${
        danger
          ? "text-red-500 hover:bg-red-50"
          : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
      }`}
    >
      {label}
    </Link>
  );
}

/* ===== Data ===== */

const properties = [
  {
    title: "Luxury Beachfront Villa",
    location: "Miami, FL",
    price: "$2,400,000",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    title: "Modern City Apartment",
    location: "New York, NY",
    price: "$980,000",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
  },
];
