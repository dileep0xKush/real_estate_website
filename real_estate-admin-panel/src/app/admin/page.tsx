"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const chartData = [
  { name: "Jan", value: 2400 },
  { name: "Feb", value: 3200 },
  { name: "Mar", value: 2800 },
  { name: "Apr", value: 4100 },
  { name: "May", value: 3900 },
  { name: "Jun", value: 4500 },
];

export default function DashboardPage() {
  return (
    <main className="w-full min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-3 sm:p-5 lg:p-6 min-w-0">
        {/* Header */}
        <div className="mb-4 sm:mb-5">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
            Dashboard
          </h2>
          <p className="text-xs sm:text-sm text-gray-500">
            Insights & analytics overview
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
          <Card title="Total Users" value="12,482" change="+8.2%" />
          <Card title="Revenue" value="$24,980" change="+12%" />
          <Card title="New Leads" value="124" change="+5.4%" />
          <Card title="Active Listings" value="327" change="+3.1%" />
        </div>

        {/* Graph + Status */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-5 min-w-0">
          {/* Chart */}
          <div className="col-span-1 lg:col-span-2 rounded-2xl bg-white shadow-lg p-4 sm:p-5 min-w-0">
            <h3 className="font-semibold text-gray-800 mb-3 sm:mb-4">
              Growth Overview
            </h3>

            {/* Mobile uses aspect ratio instead of fixed height */}
            <div className="h-56 sm:h-64 md:h-72 lg:h-[22rem] min-w-0">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid stroke="#eee" strokeDasharray="4 4" />
                  <XAxis dataKey="name" fontSize={12} />
                  <YAxis fontSize={12} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#2563eb"
                    strokeWidth={3}
                    dot={{ r: 3 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Status Panel */}
          <div className="rounded-2xl bg-blue-600 text-white shadow-xl p-4 sm:p-5">
            <h3 className="font-semibold mb-1">System Status</h3>
            <p className="text-white/80 text-xs sm:text-sm mb-3">
              Realtime performance report
            </p>

            <div className="space-y-2">
              <Widget label="Server Load" value="62%" />
              <Widget label="Active Sessions" value="241" />
              <Widget label="Response Time" value="132ms" />
              <Widget label="API Health" value="Stable" />
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="rounded-2xl bg-white shadow-lg p-4 sm:p-5 mt-5">
          <h3 className="font-semibold text-gray-800 mb-3">
            Recent Activity
          </h3>

          <ul className="space-y-2 text-sm text-gray-600">
            <Activity text="New user registered" tag="John Doe" />
            <Activity text="Property updated" tag="#A-2431" />
            <Activity text="Payment received" tag="$320" />
          </ul>
        </div>
      </div>
    </main>
  );
}

/* Components */

function Card({ title, value, change }: { title: string; value: string; change: string }) {
  return (
    <div className="rounded-2xl bg-white shadow-lg p-3 sm:p-4">
      <p className="text-xs sm:text-sm text-gray-500">{title}</p>
      <h3 className="text-xl sm:text-2xl font-semibold mt-1">{value}</h3>
      <span className="text-blue-600 text-xs font-semibold mt-1 inline-block">
        {change}
      </span>
    </div>
  );
}

function Widget({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between bg-white/15 rounded-xl px-3 py-2">
      <span className="text-sm">{label}</span>
      <span className="font-semibold">{value}</span>
    </div>
  );
}

function Activity({ text, tag }: { text: string; tag: string }) {
  return (
    <li className="bg-gray-50 rounded-xl p-3 shadow-sm">
      {text} — <span className="text-blue-600 font-medium">{tag}</span>
    </li>
  );
}
