"use client";

import Link from "next/link";

export default function FullGallery() {
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
                    Olivers Villas <span className="badge">sale</span>
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

              {/* Price / Actions */}
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

          {/* Slider + Description */}
          <div className="row">
            <div className="col-lg-12 col-md-12 col-xs-12">
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
                  et dui vestibulum, bibendum purus sit amet...
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
                    <strong>ACRES SOURCE:</strong> <span>Assessor</span>
                  </li>

                  <li>
                    <strong>AP #:</strong> <span>2639-017-020</span>
                  </li>

                  <li>
                    <strong>APPLIANCES:</strong>{" "}
                    <span>
                      Cooktop - Gas, Dishwasher, Freestanding Gas Range,
                      Garbage Disposal
                    </span>
                  </li>

                  <li>
                    <strong>BATHROOM:</strong>{" "}
                    <span>Remodeled, Skylight(s), Tile Walls</span>
                  </li>

                  <li>
                    <strong>DOORS &amp; WINDOWS:</strong>{" "}
                    <span>Double Pane Windows, Skylights</span>
                  </li>

                  <li>
                    <strong>FIREPLACE DESCRIPTION:</strong>{" "}
                    <span>Brick</span>
                  </li>

                  <li>
                    <strong>FIREPLACE FUEL:</strong>{" "}
                    <span>Uses Both Gas &amp; Wood</span>
                  </li>

                  <li>
                    <strong>FLOORS:</strong>{" "}
                    <span>Carpet - Partial, Ceramic Tile</span>
                  </li>

                  <li>
                    <strong>PLUMBING:</strong>{" "}
                    <span>Full Copper Plumbing</span>
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
                  ].map((x, i) => (
                    <li key={i}>
                      <i className="lni-check-box"></i> {x}
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
                            className={`accordion-title ${
                              n !== 1 ? "collapsed" : ""
                            }`}
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
          </div>
        </div>

        {/* Similar Properties */}
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="desc-title">Similar Properties</h2>
            </div>

            {[1, 2, 3].map((n) => (
              <div className="col-lg-4 col-md-6 col-xs-12" key={n}>
                <div className="property-main">
                  <div className="property-wrap">
                    <div className="property-item">
                      {/* Image */}
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
                            {n === 1 ? "For Sale" : n === 2 ? "For Rent" : "New"}
                          </span>
                        </div>
                      </div>

                      {/* Body */}
                      <div className="item-body">
                        <h3 className="property-title">
                          <Link href="#">
                            {n === 1
                              ? "Amazing oceanfront apartment"
                              : n === 2
                              ? "Family Condo"
                              : "Guaranteed modern home"}
                          </Link>
                        </h3>

                        <div className="adderess">
                          <i className="lni-map-marker"></i>{" "}
                          {n === 1
                            ? "Drive Street, Los Angeles, US"
                            : n === 2
                            ? "Louis, Missouri, US"
                            : "Avenue C, New York, US"}
                        </div>

                        <div className="pricin-list">
                          <div className="property-price">
                            <span>
                              {n === 1
                                ? "$1,500"
                                : n === 2
                                ? "$27,00"
                                : "$1,750"}
                            </span>
                          </div>

                          <p>
                            <span>
                              {n === 1 ? "4" : n === 2 ? "6" : "8"} bds
                            </span>{" "}
                            .{" "}
                            <span>
                              {n === 1 ? "4" : n === 2 ? "8" : "8"} ba
                            </span>{" "}
                            .{" "}
                            <span>
                              {n === 1
                                ? "2500"
                                : n === 2
                                ? "2600"
                                : "3000"}{" "}
                              Sqft
                            </span>
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
