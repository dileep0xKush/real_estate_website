"use client";

import Link from "next/link";

export default function PropertyDetailsPage() {
  return (
    <>
      {/* Page Banner */}
      <div id="page-banner-area" className="page-banner">
        <div className="page-banner-title">
          <div className="text-center">
            <h2>Properties</h2>

            <Link href="#">
              <i className="lni-home"></i> Home
            </Link>

            <span className="crumbs-spacer">
              <i className="lni-chevron-right"></i>
            </span>

            <span className="current">Standard Detail</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div id="content" className="section-padding">
        <div className="container">
          {/* Top Summary */}
          <div className="property-details">
            <div className="row">
              {/* Left */}
              <div className="col-lg-4 col-md-12 col-xs-12">
                <div className="info">
                  <h3>
                    Luxury Apartment <span className="badge">sale</span>
                  </h3>
                  <p className="room-type">Living Room</p>
                  <p className="address">
                    <i className="lni-map-marker"></i> York Blvd, Los Angeles,
                    US View, CA 94041USA
                  </p>
                </div>
              </div>

              {/* Middle */}
              <div className="col-lg-4 col-md-12 col-xs-12">
                <div className="details">
                  <div className="details-listing">
                    <p>Bedrooms</p>
                    <h5>05</h5>
                  </div>

                  <div className="details-listing">
                    <p>Washrooms</p>
                    <h5>06</h5>
                  </div>

                  <div className="details-listing">
                    <p>Size (Sq.ft)</p>
                    <h5>1650</h5>
                  </div>
                </div>
              </div>

              {/* Right */}
              <div className="col-lg-4 col-md-12 col-xs-12">
                <div className="others">
                  <ul>
                    <li>
                      <span>$22,500.00</span>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lni-bookmark-alt"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lni-heart"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Main Row */}
          <div className="row">
            {/* Main Content */}
            <div className="col-lg-8 col-md-12 col-xs-12">
              {/* Slider */}
              <div className="property-slider">
                <div id="property-slider" className="owl-carousel owl-theme">
                  <div className="item">
                    <img
                      src="/assets/img/productinfo/img1.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="item">
                    <img
                      src="/assets/img/productinfo/img2.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="item">
                    <img
                      src="/assets/img/productinfo/img3.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="inner-box property-dsc">
                <h2 className="desc-title">Property Description</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  et dui vestibulum...
                </p>
                <p>
                  Duis non tincidunt dui. Sed vehicula, libero at eleifend
                  accumsan...
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Facere nisi sequi...
                </p>
              </div>

              {/* Quick Summary */}
              <div className="inner-box short-info">
                <h2 className="desc-title">Quick Summary</h2>
                <ul className="additional-details">
                  <li>
                    <strong>AC:</strong> <span>Central</span>
                  </li>
                  <li>
                    <strong>ACRES:</strong> <span>0.14</span>
                  </li>
                  <li>
                    <strong>APPLIANCES:</strong>{" "}
                    <span>
                      Cooktop - Gas, Dishwasher, Freestanding Gas Range,
                      Disposal
                    </span>
                  </li>
                  <li>
                    <strong>BATHROOM:</strong>{" "}
                    <span>Remodeled, Skylight(s), Tile Walls</span>
                  </li>
                  <li>
                    <strong>PLUMBING:</strong> <span>Full Copper Plumbing</span>
                  </li>
                </ul>
              </div>

              {/* Features */}
              <div className="inner-box featured">
                <h2 className="desc-title">Features</h2>
                <ul className="property-features checkboxes">
                  <li>
                    <i className="lni-check-box"></i> Air Conditioning
                  </li>
                  <li>
                    <i className="lni-check-box"></i> Central Heating
                  </li>
                  <li>
                    <i className="lni-check-box"></i> Laundry Room
                  </li>
                  <li>
                    <i className="lni-check-box"></i> Swimming Pool
                  </li>
                  <li>
                    <i className="lni-check-box"></i> Gym
                  </li>
                  <li>
                    <i className="lni-check-box"></i> Alarm
                  </li>
                </ul>
              </div>

              {/* Map */}
              <div className="inner-box location-map">
                <h2 className="desc-title">Location On Map</h2>
                <div id="container-map"></div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="col-lg-4 col-md-12 col-xs-12 right-sidebar">
              {/* Widget Buttons */}
              <div className="widget mb2">
                <button className="widget-button">
                  <i className="lni-printer"></i>
                </button>
                <button className="widget-button">
                  <i className="lni-star"></i>
                </button>
                <button className="widget-button">
                  <i className="lni-zip"></i>
                </button>
                <div className="clearfix"></div>
              </div>

              {/* Agent Widget */}
              <div className="widget mt3">
                <div className="agent-inner">
                  <div className="agent-title">
                    <div className="agent-photo">
                      <a href="#">
                        <img
                          src="/assets/img/productinfo/agent.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </a>
                    </div>

                    <div className="agent-details">
                      <h3>
                        <a href="#">Simon Heqburn</a>
                      </h3>
                      <span>
                        <i className="lni-phone-handset"></i>(123) 123-456
                      </span>
                    </div>
                  </div>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Email"
                  />

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Phone"
                  />

                  <p>
                    I am interested in this property [ID 123456] and I would
                    like to know more details.
                  </p>

                  <button className="btn btn-common fullwidth mt-4">
                    Send Message
                  </button>
                </div>
              </div>

              {/* Featured Properties */}
              <div className="widget mt3">
                <h3 className="sidebar-title">Featured Properties</h3>

                <div id="listing-carousel" className="owl-carousel">
                  {[1, 2, 3].map((n) => (
                    <div className="item" key={n}>
                      <div className="listing-item">
                        <a href="#" className="listing-img-container">
                          <img
                            src={`/assets/img/productinfo/listing${n}.jpg`}
                            alt=""
                            className="img-fluid"
                          />

                          <div className="listing-badges">
                            <span className="featured">Featured</span>
                            <span>For Sale</span>
                          </div>

                          <div className="listing-content">
                            <span className="listing-title">
                              Eagle Apartments <i>$275,000</i>
                            </span>

                            <ul className="listing-content">
                              <li>
                                Area <span>530 sq ft</span>
                              </li>
                              <li>
                                Rooms <span>3</span>
                              </li>
                              <li>
                                Beds <span>1</span>
                              </li>
                              <li>
                                Baths <span>1</span>
                              </li>
                            </ul>
                          </div>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mortgage Calculator */}
              <div className="widget">
                <h3 className="sidebar-title">Mortgage Calculator</h3>

                <form className="mortgage-calc">
                  <p className="tip-content">Set This Property Price</p>

                  <div className="calc-input">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Sale Price"
                    />
                    <label>$</label>
                  </div>

                  <div className="calc-input">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Down Payment"
                    />
                    <label>$</label>
                  </div>

                  <div className="calc-input">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Loan Term (Years)"
                    />
                    <label className="lni-calendar"></label>
                  </div>

                  <div className="calc-input">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Interest Rate"
                    />
                    <label>%</label>
                  </div>

                  <button className="btn btn-common">Calculate</button>
                </form>
              </div>

              {/* Social Media */}
              <div className="widget widget-social">
                <h3 className="sidebar-title">Social Media</h3>

                <ul className="social-icons">
                  <li>
                    <a className="twitter" href="#">
                      <i className="lni-twitter-filled"></i>
                    </a>
                  </li>

                  <li>
                    <a className="facebook" href="#">
                      <i className="lni-facebook-filled"></i>
                    </a>
                  </li>

                  <li>
                    <a className="google" href="#">
                      <i className="lni-google-plus"></i>
                    </a>
                  </li>

                  <li>
                    <a className="linkedin" href="#">
                      <i className="lni-linkedin-filled"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>

        {/* Similar Properties */}
        <div className="container mt-5">
          <div className="row">
            <div className="col-12">
              <h2 className="desc-title">Similar Properties</h2>
            </div>

            {[1, 2, 3].map((n) => (
              <div className="col-lg-4 col-md-6 col-xs-12" key={n}>
                <div className="property-main">
                  <div className="property-wrap">
                    <div className="property-item">
                      <div className="item-thumb">
                        <a className="hover-effect" href="#">
                          <img
                            className="img-fluid"
                            src={`/assets/img/property/house-${n}.jpg`}
                            alt=""
                          />
                        </a>

                        <div className="label-inner">
                          <span className="label-status label bg-red">
                            For Sale
                          </span>
                        </div>
                      </div>

                      <div className="item-body">
                        <h3 className="property-title">
                          <a href="#">Sample Property {n}</a>
                        </h3>

                        <div className="adderess">
                          <i className="lni-map-marker"></i> Example Address
                        </div>

                        <div className="pricin-list">
                          <div className="property-price">
                            <span>$1,500</span>
                          </div>

                          <p>
                            <span>4 bds</span> . <span>4 ba</span> .{" "}
                            <span>2500 Sqft</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
