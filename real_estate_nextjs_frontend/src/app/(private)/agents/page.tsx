"use client";

import Link from "next/link";

export default function AgentsPage() {
  // Team members list (makes JSX cleaner)
  const team = [
    { id: 1, name: "David Givens", role: "Real Estate Agent", img: "team-01" },
    { id: 2, name: "John Doe", role: "Real Estate Agent", img: "team-02" },
    { id: 3, name: "Darrell S. Allen", role: "Real Estate Agent", img: "team-03" },
    { id: 4, name: "Justyna Michallek", role: "Real Estate Agent", img: "team-04" },
    { id: 5, name: "John Doe", role: "Real Estate Agent", img: "team-04" },
    { id: 6, name: "Darrell S. Allen", role: "Real Estate Agent", img: "team-03" },
    { id: 7, name: "Justyna Michallek", role: "Real Estate Agent", img: "team-02" },
    { id: 8, name: "David Givens", role: "Real Estate Agent", img: "team-01" },
  ];

  return (
    <>
      {/* Page Banner */}
      <div id="page-banner-area" className="page-banner">
        <div className="page-banner-title">
          <div className="text-center">
            <h2>Our - Agents</h2>

            <Link href="/">
              <i className="lni-home"></i> Home
            </Link>

            <span className="crumbs-spacer">
              <i className="lni-chevron-right"></i>
            </span>

            <span className="current">Agents</span>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <section id="team" className="section-padding text-center">
        <div className="container">
          <div className="row">
            {team.map((agent) => (
              <div
                className="col-sm-6 col-md-6 col-lg-3"
                key={agent.id}
              >
                <div className="team-item text-center">
                  <div className="team-img">
                    <img
                      className="img-fluid"
                      src={`/assets/img/team/${agent.img}.jpg`}
                      alt={agent.name}
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
                      <Link href="#">{agent.name}</Link>
                    </h3>
                    <p>{agent.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
