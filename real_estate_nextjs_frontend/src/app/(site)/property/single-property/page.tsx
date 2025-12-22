"use client";

import Link from "next/link";

export default function SingleProperty() {
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
          {/* Property Header */}
          <div className="property-details">
            <div className="row">
              {/* Info */}
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

              {/* Details */}
              <div className="col-lg-4 col-md-12 col-xs-12">
                <div className="details">
                  {[
                    { label: "Bedrooms", value: "05" },
                    { label: "Washrooms", value: "06" },
                    { label: "Size (Sq.ft)", value: "1650" },
                  ].map((item, i) => (
                    <div className="details-listing" key={i}>
                      <p>{item.label}</p>
                      <h5>{item.value}</h5>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price & Actions */}
              <div className="col-lg-4 col-md-12 col-xs-12">
                <div className="others">
                  <ul>
                    <li>
                      <span>$22,500.00</span>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="lni-bookmark-alt"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="lni-heart"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="row">
            <div className="col-12">
              <div className="details-thumb">
                <img
                  className="img-fluid"
                  src="/assets/img/productinfo/sing-img.jpg"
                  alt=""
                />
              </div>
            </div>

            {/* Main left content */}
            <div className="col-lg-8 col-md-12 col-xs-12">
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
                  Facere nisi sequi quo laborum...
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
                    <strong>ACRES SOURCE:</strong> <span>Assessor</span>
                  </li>
                  <li>
                    <strong>AP #:</strong> <span>2639-017-020</span>
                  </li>
                  <li>
                    <strong>APPLIANCES:</strong>{" "}
                    <span>
                      Cooktop - Gas, Dishwasher, Freestanding Gas Range, Garbage
                      Disposal
                    </span>
                  </li>
                  <li>
                    <strong>BATHROOM DESCRIPTION:</strong>{" "}
                    <span>Remodeled, Skylight(s), Tile Walls</span>
                  </li>
                  <li>
                    <strong>DOORS &amp; WINDOWS:</strong>{" "}
                    <span>Double Pane Windows, Skylights</span>
                  </li>
                  <li>
                    <strong>FIREPLACE LOCATION:</strong>{" "}
                    <span>Living Room</span>
                  </li>
                  <li>
                    <strong>FLOORS:</strong>{" "}
                    <span>Carpet - Partial, Ceramic Tile</span>
                  </li>
                </ul>
              </div>

              {/* Details */}
              <div className="inner-box featured">
                <h2 className="desc-title">Details</h2>

                <ul className="property-features">
                  <li>
                    Building Age: <span>2 Years</span>
                  </li>
                  <li>
                    Parking: <span>Attached Garage</span>
                  </li>
                  <li>
                    Cooling: <span>Central Cooling</span>
                  </li>
                  <li>
                    Heating: <span>Forced Air, Gas</span>
                  </li>
                  <li>
                    Sewer: <span>Public/City</span>
                  </li>
                  <li>
                    Water: <span>City</span>
                  </li>
                  <li>
                    Exercise Room: <span>Yes</span>
                  </li>
                  <li>
                    Storage Room: <span>Yes</span>
                  </li>
                </ul>
              </div>

              {/* Features */}
              <div className="inner-box featured">
                <h2 className="desc-title">Features</h2>

                <ul className="property-features checkboxes">
                  {[
                    "Air Conditioning",
                    "Central Heating",
                    "Laundry Room",
                    "Window Covering",
                    "Swimming Pool",
                    "Gym",
                    "Internet",
                    "Alarm",
                  ].map((f, i) => (
                    <li key={i}>
                      <i className="lni-check-box"></i> {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Floor Plans */}
              <div className="inner-box accordion-fp">
                <h2 className="desc-title">Floor Plans</h2>

                <div id="accordion">
                  {[1, 2, 3].map((n) => (
                    <div className="card" key={n}>
                      <div className="card-header">
                        <h3 className="accordion-heading">
                          <button
                            className="accordion-title"
                            data-toggle="collapse"
                            data-target={`#collapse${n}`}
                          >
                            {n === 1
                              ? "First Floor"
                              : n === 2
                              ? "Second Floor"
                              : "Third Floor"}
                          </button>
                        </h3>
                      </div>

                      <div
                        id={`collapse${n}`}
                        className={`collapse ${n === 1 ? "show" : ""}`}
                      >
                        <div className="card-body">
                          <div className="thumb">
                            <img
                              className="img-fluid"
                              src={`/assets/img/productinfo/floor-thumb-${n}.jpg`}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
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

              {/* Agent */}
              <div className="widget mt3">
                <div className="agent-inner">
                  <div className="agent-title">
                    <div className="agent-photo">
                      <img
                        src="/assets/img/productinfo/agent.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>

                    <div className="agent-details">
                      <h3>
                        <Link href="#">Simon Heqburn</Link>
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
                    I'm interested in this property [ID 123456] and I'd like to
                    know more details.
                  </p>
                  <button className="btn btn-common fullwidth mt-4">
                    Send Message
                  </button>
                </div>
              </div>

              {/* Featured Properties Carousel */}
              <div className="widget mt3">
                <h3 className="sidebar-title">Featured Properties</h3>

                <div id="listing-carousel" className="owl-carousel">
                  {[1, 2, 3].map((n) => (
                    <div className="item" key={n}>
                      <div className="listing-item">
                        <Link href="#" className="listing-img-container">
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
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mortgage calculator */}
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

              {/* Social */}
              <div className="widget widget-social">
                <h3 className="sidebar-title">Social Media</h3>

                <ul className="social-icons">
                  <li>
                    <Link className="twitter" href="#">
                      <i className="lni-twitter-filled"></i>
                    </Link>
                  </li>
                  <li>
                    <Link className="facebook" href="#">
                      <i className="lni-facebook-filled"></i>
                    </Link>
                  </li>
                  <li>
                    <Link className="google" href="#">
                      <i className="lni-google-plus"></i>
                    </Link>
                  </li>
                  <li>
                    <Link className="linkedin" href="#">
                      <i className="lni-linkedin-filled"></i>
                    </Link>
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
                        <Link className="hover-effect" href="#">
                          <img
                            className="img-fluid"
                            src={`/assets/img/property/house-${n}.jpg`}
                            alt=""
                          />
                        </Link>

                        <div className="label-inner">
                          <span className="label-status label bg-red">
                            For Sale
                          </span>
                        </div>
                      </div>

                      <div className="item-body">
                        <h3 className="property-title">
                          <Link href="#">Sample Home {n}</Link>
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
