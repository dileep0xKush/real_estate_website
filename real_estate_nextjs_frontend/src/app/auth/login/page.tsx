"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiUser, FiLock } from "react-icons/fi";
import { loginUser } from "@/services/auth";
import { showSuccess, showError } from "@/utils/toast";

export default function LoginPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await loginUser(form);

      if (res.status === "success") {
        showSuccess("Login successful");

        // Example: store token
        localStorage.setItem("accessToken", res.data.accessToken);

        setTimeout(() => router.push("/dashboard"), 1200);
      } else {
        showError("Invalid email or password");
      }
    } catch (err) {
      showError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Page Banner */}
      <div id="page-banner-area" className="page-banner">
        <div className="page-banner-title text-center">
          <h2>Login</h2>
          <Link href="/">Home</Link>
          <span className="crumbs-spacer"> / </span>
          <span className="current">Login</span>
        </div>
      </div>

      {/* Login Section */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-6 col-sm-10">
              <div className="card shadow-sm border-0">
                <div className="card-body p-4">
                  <h3 className="card-title text-center mb-4">Welcome Back</h3>

                  <form onSubmit={handleSubmit}>
                    {/* email */}
                    <div className="mb-3 position-relative">
                      <FiUser className="position-absolute top-50 translate-middle-y ms-3 text-muted" />
                      <input
                        type="text"
                        name="email"
                        className="form-control ps-5"
                        placeholder="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Password */}
                    <div className="mb-3 position-relative">
                      <FiLock className="position-absolute top-50 translate-middle-y ms-3 text-muted" />
                      <input
                        type="password"
                        name="password"
                        className="form-control ps-5"
                        placeholder="Password"
                        value={form.password}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Submit */}
                    <div className="d-grid mb-3">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={loading}
                      >
                        {loading ? "Logging in..." : "Login"}
                      </button>
                    </div>
                  </form>

                  <div className="text-center">
                    <p>
                      Don’t have an account?{" "}
                      <Link href="/auth/register">Register here</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
