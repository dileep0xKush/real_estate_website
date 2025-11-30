"use client";

import Link from "next/link";

export default function ContactUsPage() {
  return (
    <>
      {/* Page Banner */}
      <div id="page-banner-area" className="page-banner">
        <div className="page-banner-title">
          <div className="text-center">
            <h2>Contact Us</h2>

            <Link href="/">
              <i className="lni-home"></i> Home
            </Link>

            <span className="crumbs-spacer">
              <i className="lni-chevron-right"></i>
            </span>

            <span className="current">Contact Us</span>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section id="contact-section" className="section-padding">
        <div className="container">
          <div className="row">
            {/* Left Info */}
            <div className="col-lg-5 col-md-6">
              <div className="contact-right-area">
                <h2 className="title-">Get In Touch</h2>
                <p>
                  If you are interested in working with us, <br /> please get in
                  touch.
                </p>

                <div className="contact-right">
                  <div className="single-contact">
                    <div className="contact-icon">
                      <i className="lni-map-marker"></i>
                    </div>
                    <p>63130 St. York Blvd, Los Angeles, US</p>
                  </div>

                  <div className="single-contact">
                    <div className="contact-icon">
                      <i className="lni-envelope"></i>
                    </div>
                    <p>
                      <a href="mailto:Feedback@property.com">
                        Feedback@property.com
                      </a>
                    </p>
                  </div>

                  <div className="single-contact">
                    <div className="contact-icon">
                      <i className="lni-phone-handset"></i>
                    </div>
                    <p>
                      <a href="tel:+1234567478">+1-234-567-478</a>
                    </p>
                  </div>
                </div>

                {/* Social Icons */}
                <div className="social-icon">
                  <a className="facebook" href="#">
                    <i className="lni-facebook-filled"></i>
                  </a>
                  <a className="twitter" href="#">
                    <i className="lni-twitter-filled"></i>
                  </a>
                  <a className="instagram" href="#">
                    <i className="lni-instagram-filled"></i>
                  </a>
                  <a className="linkedin" href="#">
                    <i className="lni-linkedin-filled"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-7 col-md-6 form-line">
              <h2>FeedBack</h2>

              <form id="contactForm" name="contact-form" method="post">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="msg_subject"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </div>

                <div className="form-group">
                  <textarea
                    className="form-control"
                    rows="5"
                    id="message"
                    name="message"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>

                <div className="form-submit">
                  <button
                    type="submit"
                    className="btn btn-common"
                    id="form-submit"
                  >
                    <i className="fa fa-paper-plane" aria-hidden="true"></i>{" "}
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="google-map-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div id="conatiner-map">
                <iframe
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.224084455518!2d-118.243684!3d34.052235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7c6cd8f0dfb%3A0x5e86e73333c2f5d6!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
