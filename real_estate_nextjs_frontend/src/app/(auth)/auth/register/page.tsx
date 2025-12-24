"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { registerUser } from "@/services/auth";
import { RegisterPayload } from "@/types/auth";
import { TextInput } from "@/app/(private)/components/common/TextInput";
import { PasswordInput } from "@/app/(private)/components/common/PasswordInput";
import { showSuccess, showError } from "@/utils/toast";

export default function RegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState<RegisterPayload>({
    userName: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      showError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);
      const res = await registerUser(form);

      if (res.status === "success") {
        showSuccess(res.data.message || "Account created successfully");
        setTimeout(() => router.push("/auth/login"), 1500);
      } else {
        showError(res.data?.message || "Something went wrong");
      }
    } catch (err) {
      showError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left Image Section */}
      <div className="hidden lg:block relative">
        <img
          src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4"
          alt="Register"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex h-full items-center justify-center px-10">
          <div className="text-white max-w-md">
            <h2 className="text-4xl font-bold mb-4">
              Join Our Real Estate Platform
            </h2>
            <p className="text-lg text-gray-200">
              Create an account to explore properties, save listings, and manage
              your real estate journey effortlessly.
            </p>
          </div>
        </div>
      </div>

      {/* Right Form Section */}
      <div className="flex items-center justify-center bg-gray-50 px-6 py-12">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-center mb-6">
            Create Your Account
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <TextInput
              label="Username"
              name="userName"
              placeholder="Enter username"
              value={form.userName}
              onChange={handleChange}
              required
            />

            <TextInput
              label="Full Name"
              name="name"
              placeholder="Enter full name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <TextInput
              label="Email Address"
              name="email"
              type="email"
              placeholder="Enter email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <PasswordInput
              label="Password"
              name="password"
              placeholder="Enter password"
              value={form.password}
              onChange={handleChange}
              required
            />

            <PasswordInput
              label="Confirm Password"
              name="confirmPassword"
              placeholder="Re-enter password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition disabled:opacity-60"
            >
              {loading ? "Registering..." : "Create Account"}
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{" "}
            <Link
              href="/auth/login"
              className="text-blue-600 font-semibold hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
