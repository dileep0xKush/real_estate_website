"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function ListingMapPage() {
  useEffect(() => {
    // Placeholder map loader — replace with Google Maps API later
    const map = document.getElementById("conatiner-map");
    if (map) {
      map.innerHTML =
        "<div style='padding:20px;text-align:center;'>Google Map Placeholder</div>";
    }
  }, []);

  const listings = [
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
  ];

  return (
    <>
      {/* MAP SECTION */}
      <section id="google-map-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div
                id="conatiner-map"
                style={{
                  height: "400px",
                  width: "100%",
                  background: "#eaeaea",
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="main-container section-padding">
        <div className="container">
          <div className="row">
            {/* LEFT CONTENT */}
            <div className="col-lg-8 col-md-12 col-xs-12">
              {/* Filter Bar */}
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
                  <Link href="#" className="list active">
                    <i className="lni-menu"></i>
                  </Link>

                  <Link href="#" className="grid">
                    <i className="lni-grid"></i>
                  </Link>
                </div>

                <p className="text-left">42 homes found</p>
              </div>

              {/* LISTING ITEMS */}
              <div className="listing-container list-layout">
                {listings.map((item, i) => (
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

            {/* SIDEBAR */}
            <div className="col-lg-4 col-md-12 col-xs-12">
              <div className="sidebar sticky right">
                <div className="widget">
                  <h3 className="sidebar-title">Find New Home</h3>

                  {/** REUSED DROPDOWNS */}
                  {[
                    ["Any Status", ["For Sale", "For Rent"]],
                    [
                      "All Types",
                      [
                        "Apartments (3)",
                        "Houses (2)",
                        "Condos (1)",
                        "Industrial (2)",
                        "Land (3)",
                        "Offices (1)",
                        "Retail (2)",
                        "Villas (1)",
                      ],
                    ],
                    [
                      "All States",
                      [
                        "California",
                        "Florida",
                        "Washington",
                        "New York",
                        "Wyoming",
                      ],
                    ],
                    [
                      "All Cities",
                      ["New York", "Chicago", "Phoenix", "California"],
                    ],
                  ].map(([label, options], idx) => (
                    <div className="row with-forms" key={idx}>
                      <div className="col-md-12">
                        <select className="classic">
                          <option>{label}</option>
                          {options.map((opt: any, i: number) => (
                            <option key={i}>{opt}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  ))}

                  {/* Beds & Baths */}
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

                  {/* Additional Features */}
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
                      ].map((label, i) => (
                        <div key={i}>
                          <input id={`check-${label}`} type="checkbox" />
                          <label htmlFor={`check-${label}`}>{label}</label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="fullwidth btn btn-common">Search</button>
                </div>
              </div>
            </div>
            {/* Sidebar End */}
          </div>
        </div>
      </div>
    </>
  );
}
