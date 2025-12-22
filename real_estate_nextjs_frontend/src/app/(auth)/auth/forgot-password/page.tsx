"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMail } from "react-icons/fi";
import { showSuccess, showError } from "@/utils/toast";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      // 🔧 Replace this with real API later
      await new Promise((resolve) => setTimeout(resolve, 1200));

      showSuccess("Password reset link sent to your email");
      setEmail("");
    } catch (err) {
      showError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* LEFT IMAGE SECTION */}
      <div className="hidden lg:block relative">
        <img
          src="https://images.unsplash.com/photo-1582407947304-fd86f028f716"
          alt="Forgot Password"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex h-full items-center justify-center px-10">
          <div className="text-white max-w-md">
            <h2 className="text-4xl font-bold mb-4">Forgot Your Password?</h2>
            <p className="text-lg text-gray-200">
              No worries. Enter your email and we’ll send you a reset link to
              get back into your account.
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT FORM SECTION */}
      <div className="flex items-center justify-center bg-gray-50 px-6 py-12">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-center mb-6">
            Reset Password
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div className="relative">
              <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-11 pr-4 py-3 border rounded-lg
                  focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 py-3 rounded-lg bg-blue-600 text-white
                font-semibold hover:bg-blue-700 transition disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Reset Link"}
            </button>
          </form>

          {/* Footer Links */}
          <div className="text-center text-sm text-gray-600 mt-6 space-y-2">
            <p>
              Remembered your password?{" "}
              <Link
                href="/auth/login"
                className="text-blue-600 font-semibold hover:underline"
              >
                Login
              </Link>
            </p>
            <p>
              Don’t have an account?{" "}
              <Link
                href="/auth/register"
                className="text-blue-600 font-semibold hover:underline"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
