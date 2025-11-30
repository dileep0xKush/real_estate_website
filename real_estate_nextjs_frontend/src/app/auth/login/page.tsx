"use client";

import Link from "next/link";

export default function LoginPage() {
  return (
    <>
      {/* Page Banner */}
      <div id="page-banner-area" className="page-banner">
        <div className="page-banner-title">
          <div className="text-center">
            <h2>Log</h2>

            <Link href="/">
              <i className="lni-home"></i> Home
            </Link>

            <span className="crumbs-spacer">
              <i className="lni-chevron-right"></i>
            </span>

            <span className="current">Log</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section id="content" className="section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-6 col-xs-12">
              <div className="page-login-form box">
                <h3>Login</h3>

                <form className="login-form">
                  {/* Username */}
                  <div className="form-group">
                    <div className="input-icon">
                      <i className="lni-user"></i>
                      <input
                        type="text"
                        id="sender-email"
                        className="form-control"
                        name="email"
                        placeholder="Username"
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

                  {/* Remember me */}
                  <div className="form-group">
                    <label>
                      <input type="checkbox" name="rememberme" /> Keep Me Signed
                      In
                    </label>
                  </div>

                  <button className="btn btn-common log-btn">Submit</button>
                </form>

                <ul className="form-links">
                  <li className="text-center">
                    <Link href="/auth/register">Do not have an account?</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
