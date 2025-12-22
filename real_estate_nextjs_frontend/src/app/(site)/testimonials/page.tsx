"use client";

import Link from "next/link";

export default function TestimonialsPage() {
  return (
    <>
      {/* Page Banner */}
      <div id="page-banner-area" className="page-banner">
        <div className="page-banner-title">
          <div className="text-center">
            <h2>Testimonials</h2>

            <Link href="/">
              <i className="lni-home"></i> Home
            </Link>

            <span className="crumbs-spacer">
              <i className="lni-chevron-right"></i>
            </span>

            <span className="current">Testimonials</span>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <section className="testimonial section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div id="testimonials" className="owl-carousel">
                {/* Testimonial 1 */}
                <div className="item">
                  <div className="testimonial-item">
                    <div className="content">
                      <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Explicabo quidem, excepturi facere magnam illum,
                        at accusantium doloremque odio.
                      </p>
                    </div>
                  </div>

                  <div className="client-info">
                    <div className="img-thumb">
                      <img src="/assets/img/testimonial/img1.png" alt="" />
                    </div>
                    <div className="info-text">
                      <h2>
                        <a href="#">Michael Papirov</a>
                      </h2>
                      <h4>
                        <a href="#">Customer</a>
                      </h4>
                    </div>
                  </div>
                </div>

                {/* Testimonial 2 */}
                <div className="item">
                  <div className="testimonial-item">
                    <div className="content">
                      <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Explicabo quidem, excepturi facere magnam illum,
                        at accusantium doloremque odio.
                      </p>
                    </div>
                  </div>

                  <div className="client-info">
                    <div className="img-thumb">
                      <img src="/assets/img/testimonial/img2.png" alt="" />
                    </div>
                    <div className="info-text">
                      <h2>
                        <a href="#">Josh Rossi</a>
                      </h2>
                      <h4>
                        <a href="#">Manager</a>
                      </h4>
                    </div>
                  </div>
                </div>

                {/* Testimonial 3 */}
                <div className="item">
                  <div className="testimonial-item">
                    <div className="content">
                      <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Explicabo quidem, excepturi facere magnam illum,
                        at accusantium doloremque odio.
                      </p>
                    </div>
                  </div>

                  <div className="client-info">
                    <div className="img-thumb">
                      <img src="/assets/img/testimonial/img3.png" alt="" />
                    </div>
                    <div className="info-text">
                      <h2>
                        <a href="#">Daniel Greem</a>
                      </h2>
                      <h4>
                        <a href="#">Customer</a>
                      </h4>
                    </div>
                  </div>
                </div>

                {/* Testimonial 4 */}
                <div className="item">
                  <div className="testimonial-item">
                    <div className="content">
                      <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Explicabo quidem, excepturi facere magnam illum,
                        at accusantium doloremque odio.
                      </p>
                    </div>
                  </div>

                  <div className="client-info">
                    <div className="img-thumb">
                      <img src="/assets/img/testimonial/img4.png" alt="" />
                    </div>
                    <div className="info-text">
                      <h2>
                        <a href="#">John Doe</a>
                      </h2>
                      <h4>
                        <a href="#">Manager</a>
                      </h4>
                    </div>
                  </div>
                </div>

                {/* Testimonial 5 */}
                <div className="item">
                  <div className="testimonial-item">
                    <div className="content">
                      <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Explicabo quidem, excepturi facere magnam illum,
                        at accusantium doloremque odio.
                      </p>
                    </div>
                  </div>

                  <div className="client-info">
                    <div className="img-thumb">
                      <img src="/assets/img/testimonial/img5.png" alt="" />
                    </div>
                    <div className="info-text">
                      <h2>
                        <a href="#">Michael Papirov</a>
                      </h2>
                      <h4>
                        <a href="#">Customer</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Counters */}
      <section
        className="counter-section section-padding"
        data-stellar-background-ratio="0.5"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 text-center">
              <div className="counter">
                <div className="icon">
                  <i className="lni-users"></i>
                </div>
                <div className="counterUp">6252</div>
                <p>Happy Customers</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 text-center">
              <div className="counter">
                <div className="icon">
                  <i className="lni-apartment"></i>
                </div>
                <div className="counterUp">3091</div>
                <p>Completed Projects</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 text-center">
              <div className="counter">
                <div className="icon">
                  <i className="lni-key"></i>
                </div>
                <div className="counterUp">1200</div>
                <p>Property Sold</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 text-center">
              <div className="counter">
                <div className="icon">
                  <i className="lni-cup"></i>
                </div>
                <div className="counterUp">79</div>
                <p>Awards Win</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section id="clients-logo" className="section-padding">
        <div className="container">
          <div className="row">
            {["img1", "img2", "img3", "img4", "img5", "img6"].map((img, i) => (
              <div key={i} className="col-lg-2 col-md-4 col-xs-12">
                <div className="client-logo">
                  <a href="#">
                    <img
                      className="img-fluid"
                      src={`/assets/img/clients/${img}.png`}
                      alt=""
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
