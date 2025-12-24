"use client";

import Image from "next/image";
import Link from "next/link";

export default function GridListingPage() {
  return (
    <>
      {/* Page Banner */}
      <div id="page-banner-area" className="page-banner">
        <div className="page-banner-title">
          <div className="text-center">
            <h2>Grid Listing</h2>

            <Link href="/">
              <i className="lni-home"></i> Home
            </Link>

            <span className="crumbs-spacer">
              <i className="lni-chevron-right"></i>
            </span>

            <span className="current">Grid Listing</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-container section-padding">
        <div className="container">
          <div className="row">
            {/* LEFT SECTION */}
            <div className="col-lg-8 col-md-12 col-xs-12">
              {/* Filter Section */}
              <div className="product-filter">
                <div className="sort-by">
                  <span>Sort by:</span>
                  <div className="sort-by-select">
                    <select className="classic">
                      <option>Default Order</option>
                      <option>Price Low to High</option>
                      <option>Price High to Low</option>
                      <option>Newest Properties</option>
                      <option>Oldest Properties</option>
                    </select>
                  </div>
                </div>

                <div className="layout-switcher">
                  <Link href="#" className="list">
                    <i className="lni-menu"></i>
                  </Link>

                  <Link href="#" className="grid active">
                    <i className="lni-grid"></i>
                  </Link>
                </div>

                <p className="text-left">42 homes found</p>
              </div>

              {/* GRID LISTINGS */}
              <div className="listing-container grid-layout">
                {/* PROPERTY CARD */}
                {[
                  {
                    img: "/assets/img/property/house-1.jpg",
                    label: "For Sale",
                    labelClass: "bg-red",
                    title: "Amazing oceanfront apartment",
                    address: "Drive Street, Los Angeles, US",
                    price: "$1,500",
                    beds: 4,
                    baths: 4,
                    sqft: 2500,
                  },
                  {
                    img: "/assets/img/property/house-2.jpg",
                    label: "For Rent",
                    labelClass: "",
                    title: "Amazing oceanfront apartment",
                    address: "Drive Street, Los Angeles, US",
                    price: "$1,500",
                    beds: 4,
                    baths: 4,
                    sqft: 2500,
                  },
                  {
                    img: "/assets/img/property/house-3.jpg",
                    label: "New",
                    labelClass: "bg-yellow",
                    title: "Guaranteed modern home",
                    address: "Avenue C, New York, US",
                    price: "$1,750",
                    beds: 8,
                    baths: 8,
                    sqft: 3000,
                  },
                  {
                    img: "/assets/img/property/house-4.jpg",
                    label: "For Sale",
                    labelClass: "bg-red",
                    title: "Family home for sale",
                    address: "Sacramento, Chicago, US",
                    price: "$1,400",
                    beds: 2,
                    baths: 2,
                    sqft: 2200,
                  },
                ].map((item, i) => (
                  <div className="property-main" key={i}>
                    <div className="property-wrap">
                      <div className="property-item">
                        <div className="item-thumb">
                          <Link className="hover-effect" href="/property">
                            <Image
                              src={item.img}
                              width={400}
                              height={260}
                              alt={item.title}
                              className="img-fluid"
                            />
                          </Link>

                          <div className="label-inner">
                            <span
                              className={`label-status label ${item.labelClass}`}
                            >
                              {item.label}
                            </span>
                          </div>
                        </div>

                        <div className="item-body">
                          <h3 className="property-title">
                            <Link href="/property">{item.title}</Link>
                          </h3>

                          <div className="adderess">
                            <i className="lni-map-marker"></i> {item.address}
                          </div>

                          <div className="pricin-list">
                            <div className="property-price">
                              <span>{item.price}</span>
                            </div>

                            <p>
                              <span>{item.beds} bds</span> .{" "}
                              <span>{item.baths} ba</span> .{" "}
                              <span>{item.sqft} Sqft</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="pagination-container">
                <nav>
                  <ul className="pagination">
                    <li className="page-item">
                      <Link className="btn btn-common" href="#">
                        <i className="lni-chevron-left"></i> Previous
                      </Link>
                    </li>

                    <li className="page-item">
                      <a className="page-link">1</a>
                    </li>
                    <li className="page-item">
                      <a className="page-link">2</a>
                    </li>
                    <li className="page-item">
                      <a className="page-link">3</a>
                    </li>

                    <li className="page-item">
                      <Link className="btn btn-common" href="#">
                        Next <i className="lni-chevron-right"></i>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            {/* RIGHT SIDEBAR */}
            <div className="col-lg-4 col-md-12 col-xs-12">
              <div className="sidebar sticky right">
                <div className="widget">
                  <h3 className="sidebar-title">Find New Home</h3>

                  {/* FORM FIELDS (kept same) */}
                  <div className="row with-forms">
                    <div className="col-md-12">
                      <select className="classic">
                        <option>Any Status</option>
                        <option>For Sale</option>
                        <option>For Rent</option>
                      </select>
                    </div>
                  </div>

                  <div className="row with-forms">
                    <div className="col-md-12">
                      <select className="classic">
                        <option>All Types</option>
                        <option>Apartments (3)</option>
                        <option>Houses (2)</option>
                        <option>Condos (1)</option>
                        <option>Industrial (2)</option>
                        <option>Land (3)</option>
                        <option>Offices (1)</option>
                        <option>Retail (2)</option>
                        <option>Villas (1)</option>
                      </select>
                    </div>
                  </div>

                  <div className="row with-forms">
                    <div className="col-md-12">
                      <select className="classic">
                        <option>All States</option>
                        <option>California</option>
                        <option>Florida</option>
                        <option>Washington</option>
                        <option>New York</option>
                      </select>
                    </div>
                  </div>

                  <div className="row with-forms">
                    <div className="col-md-12">
                      <select className="classic">
                        <option>All Cities</option>
                        <option>New York</option>
                        <option>Chicago</option>
                        <option>Phoenix</option>
                      </select>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <select className="classic">
                        <option>Beds</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <select className="classic">
                        <option>Baths</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </div>
                  </div>

                  {/* EXTRA OPTIONS */}
                  <div className="more-search-options">
                    <h3 className="sidebar-title">Additional Features</h3>

                    <div className="checkboxes one-in-row">
                      {[
                        "Air Conditioning",
                        "Swimming Pool",
                        "Central Heating",
                        "Laundry Room",
                        "Gym",
                        "Alarm",
                        "Window Covering",
                      ].map((item, i) => (
                        <div key={i}>
                          <input id={`check-${i}`} type="checkbox" />
                          <label htmlFor={`check-${i}`}>{item}</label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="fullwidth btn btn-common">Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
