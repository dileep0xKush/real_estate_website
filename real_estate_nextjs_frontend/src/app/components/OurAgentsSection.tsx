import Link from "next/link";

export default function OurAgentsSection() {
  return (
    <section id="team" className="section-padding text-center">
      <div className="container">
        {/* Title */}
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h2 className="section-title">Our Agents</h2>
              <p>
                Duis aute irure dolor in reprehed in volupted velit esse dolore
              </p>
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="row">
          {/* Agent 1 */}
          <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="team-item text-center">
              <div className="team-img">
                <img
                  className="img-fluid"
                  src="/assets/img/team/team-01.jpg"
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
                  <Link href="#">David Givens</Link>
                </h3>
                <p>Real Estate Agent</p>
              </div>
            </div>
          </div>

          {/* Agent 2 */}
          <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="team-item text-center">
              <div className="team-img">
                <img
                  className="img-fluid"
                  src="/assets/img/team/team-02.jpg"
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
                  <Link href="#">John Doe</Link>
                </h3>
                <p>Real Estate Agent</p>
              </div>
            </div>
          </div>

          {/* Agent 3 */}
          <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="team-item text-center">
              <div className="team-img">
                <img
                  className="img-fluid"
                  src="/assets/img/team/team-03.jpg"
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
                  <Link href="#">Darrell S. Allen</Link>
                </h3>
                <p>Real Estate Agent</p>
              </div>
            </div>
          </div>

          {/* Agent 4 */}
          <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="team-item text-center">
              <div className="team-img">
                <img
                  className="img-fluid"
                  src="/assets/img/team/team-04.jpg"
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
                  <Link href="#">Justyna Michallek</Link>
                </h3>
                <p>Real Estate Agent</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
