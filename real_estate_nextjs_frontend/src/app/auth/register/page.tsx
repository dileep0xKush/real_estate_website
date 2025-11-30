"use client";

import Link from "next/link";

export default function RegisterPage() {
  return (
    <>
      {/* Page Banner */}
      <div id="page-banner-area" className="page-banner">
        <div className="page-banner-title">
          <div className="text-center">
            <h2>Register</h2>

            <Link href="/">
              <i className="lni-home"></i> Home
            </Link>

            <span className="crumbs-spacer">
              <i className="lni-chevron-right"></i>
            </span>

            <span className="current">Register</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section id="content" className="section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-6 col-xs-12">
              <div className="page-login-form box">
                <h3>Create Your Account</h3>

                <form className="login-form">
                  {/* Username */}
                  <div className="form-group">
                    <div className="input-icon">
                      <i className="lni-user"></i>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Username"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="form-group">
                    <div className="input-icon">
                      <i className="lni-envelope"></i>
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        placeholder="Email Address"
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div className="form-group">
                    <div className="input-icon">
                      <i className="lni-lock"></i>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                      />
                    </div>
                  </div>

                  {/* Retype Password */}
                  <div className="form-group">
                    <div className="input-icon">
                      <i className="lni-unlock"></i>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Retype Password"
                      />
                    </div>
                  </div>

                  <button className="btn btn-common log-btn mt-3">
                    Register
                  </button>

                  <p className="text-center mt-3">
                    Already have an account?
                    <Link href="/auth/login"> Sign In</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
