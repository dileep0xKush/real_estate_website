"use client";

import Link from "next/link";

export default function AboutUsPage() {
  return (
    <>
      {/* Page Banner */}
      <div id="page-banner-area" className="page-banner">
        <div className="page-banner-title">
          <div className="text-center">
            <h2>About Us</h2>

            <Link href="/">
              <i className="lni-home"></i> Home
            </Link>

            <span className="crumbs-spacer">
              <i className="lni-chevron-right"></i>
            </span>

            <span className="current">About Us</span>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="about section-padding">
        <div className="container">
          <div className="row">
            {/* Left Image */}
            <div className="col-lg-6 col-md-12 col-xs-12">
              <div className="img-thumb">
                <img
                  src="/assets/img/about/img-1.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>

            {/* Right Image */}
            <div className="col-lg-6 col-md-12 col-xs-12">
              <div className="img-thumb">
                <img
                  src="/assets/img/about/img-2.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>

            {/* Content */}
            <div className="col-12">
              <div className="about-conter">
                <h3>About Us</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cupiditate, adipisci sequi porro debitis blanditiis deleniti
                  doloribus qui in unde...
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nostrum minus iste quasi, ut dolorum temporibus quas! Neque
                  reprehenderit aperiam...
                </p>

                <Link href="/contact" className="mt-3 btn btn-common">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div id="testimonials" className="owl-carousel">
                {[1, 2, 3, 4, 5].map((n) => (
                  <div className="item" key={n}>
                    <div className="testimonial-item">
                      <div className="content">
                        <p className="description">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Explicabo quidem, excepturi facere magnam illum.
                        </p>
                      </div>
                    </div>

                    <div className="client-info">
                      <div className="img-thumb">
                        <img
                          src={`/assets/img/testimonial/img${n}.png`}
                          alt=""
                          className="img-fluid"
                        />
                      </div>

                      <div className="info-text">
                        <h2>
                          <Link href="#">Person {n}</Link>
                        </h2>
                        <h4>
                          <Link href="#">
                            {n % 2 === 0 ? "Manager" : "Customer"}
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section-padding text-center">
        <div className="container">
          {/* Title */}
          <div className="row">
            <div className="col-12">
              <div className="section-title-header text-center">
                <h2 className="section-title">Our Agents</h2>
                <p>Duis aute irure dolor in reprehed in volupted velit esse dolore</p>
              </div>
            </div>
          </div>

          {/* Team Members */}
          <div className="row">
            {[1, 2, 3, 4].map((n) => (
              <div className="col-sm-6 col-md-6 col-lg-3" key={n}>
                <div className="team-item text-center">
                  <div className="team-img">
                    <img
                      className="img-fluid"
                      src={`/assets/img/team/team-0${n}.jpg`}
                      alt=""
                    />
                    <div className="team-overlay">
                      <div className="overlay-social-icon text-center">
                        <ul className="social-icon-team">
                          <li>
                            <Link href="#">
                              <i className="lni-facebook-filled"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="lni-twitter-filled"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="lni-instagram-filled"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="lni-linkedin-filled"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="info-text">
                    <h3>
                      <Link href="#">Agent {n}</Link>
                    </h3>
                    <p>Real Estate Agent</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Counter Section */}
      <section className="counter-section section-padding">
        <div className="container">
          <div className="row">
            {[
              { icon: "lni-users", number: 6252, title: "Happy Customers" },
              { icon: "lni-apartment", number: 3091, title: "Completed Projects" },
              { icon: "lni-key", number: 1200, title: "Property Sold" },
              { icon: "lni-cup", number: 79, title: "Awards Win" },
            ].map((item, i) => (
              <div
                className="col-lg-3 col-md-6 col-xs-12 work-counter-widget text-center"
                key={i}
              >
                <div className="counter">
                  <div className="icon">
                    <i className={item.icon}></i>
                  </div>

                  <div className="counterUp">{item.number}</div>
                  <p>{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section id="clients-logo" className="section-padding">
        <div className="container">
          <div className="row">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div className="col-lg-2 col-md-4 col-xs-12" key={n}>
                <div className="client-logo">
                  <Link href="#">
                    <img
                      className="img-fluid"
                      src={`/assets/img/clients/img${n}.png`}
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
