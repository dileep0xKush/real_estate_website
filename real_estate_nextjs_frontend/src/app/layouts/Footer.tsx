export default function Footer() {
  return (
    <>
      {/* Footer Section */}
      <footer id="footer" className="footer-area section-padding">
        <div className="container">
          <div className="row">
            {/* About Us */}
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <h3 className="footer-titel">
                About <span>Us</span>
              </h3>
              <ul className="footer-link">
                <li>
                  <a href="#">Company</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">Career</a>
                </li>
                <li>
                  <a href="#">Graphic Design</a>
                </li>
                <li>
                  <a href="#">Documentation</a>
                </li>
              </ul>
            </div>

            {/* Useful Links */}
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <h3 className="footer-titel">
                Useful <span>Links</span>
              </h3>
              <ul className="footer-link">
                <li>
                  <a href="#">Bayonne, New York</a>
                </li>
                <li>
                  <a href="#">Greenville, Chicago</a>
                </li>
                <li>
                  <a href="#">The Heights, New Jersey</a>
                </li>
                <li>
                  <a href="#">Bayonne, Washington DC</a>
                </li>
                <li>
                  <a href="#">Greenville, San Francisco</a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <h3 className="footer-titel">
                Contact <span>Info</span>
              </h3>
              <ul className="address">
                <li>
                  <a href="#">
                    <i className="lni-map-marker"></i> York Blvd, Los Angeles,
                    US
                    <br /> View, CA 94041 USA
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="lni-phone-handset"></i> (518) 2014-040 43
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="lni-envelope"></i> hello@example.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Subscribe */}
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <h3 className="footer-titel">
                Subscribe <span>on Our News</span>
              </h3>

              <form id="subscribe-form" className="validate">
                <div className="form-group is-empty">
                  <input
                    type="email"
                    name="Email"
                    className="form-control"
                    id="EMAIL"
                    placeholder="Email address"
                    required
                  />

                  <button
                    type="submit"
                    name="subscribe"
                    id="subscribes"
                    className="btn btn-common sub-btn"
                  >
                    <i className="lni-envelope"></i>
                  </button>

                  <div className="clearfix"></div>
                </div>
              </form>

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
        </div>
      </footer>

      {/* Copyright */}
      <section id="copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <p>
                Copyright © 2018{" "}
                <a href="https://uideck.com" rel="nofollow">
                  UIdeck
                </a>{" "}
                All Right Reserved
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
