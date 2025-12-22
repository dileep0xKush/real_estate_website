"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { registerUser } from "@/services/auth";
import { RegisterPayload } from "@/types/auth";
import { TextInput } from "@/app/components/common/TextInput";
import { PasswordInput } from "@/app/components/common/PasswordInput";
import { showSuccess, showError } from "@/utils/toast"; // <-- import toast utils

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
      console.log(res);

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
    <section className="min-vh-100 d-flex align-items-center bg-light py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-7">
            <div className="card shadow-sm border-0">
              <div className="card-body p-4 p-md-5">
                <h4 className="text-center fw-bold mb-4">
                  Create Your Account
                </h4>

                <form onSubmit={handleSubmit} noValidate>
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

                  <div className="d-grid">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg"
                      disabled={loading}
                    >
                      {loading ? "Registering..." : "Register"}
                    </button>
                  </div>

                  <p className="text-center mt-4 mb-0">
                    Already have an account?{" "}
                    <Link href="/auth/login" className="fw-semibold">
                      Sign In
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
