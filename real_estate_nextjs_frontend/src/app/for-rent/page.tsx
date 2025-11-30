"use client";

import Link from "next/link";

export default function ForRentPage() {
  const listings = [
    {
      id: 1,
      title: "Amazing oceanfront apartment",
      img: "house-1.jpg",
      address: "Drive Street, Los Angeles, US",
      price: "$1,500",
      beds: 4,
      baths: 4,
      size: "2500 Sqft",
    },
    {
      id: 2,
      title: "Amazing oceanfront apartment",
      img: "house-2.jpg",
      address: "Drive Street, Los Angeles, US",
      price: "$1,500",
      beds: 4,
      baths: 4,
      size: "2500 Sqft",
    },
    {
      id: 3,
      title: "Guaranteed modern home",
      img: "house-3.jpg",
      address: "Avenue C, New York, US",
      price: "$1,750",
      beds: 8,
      baths: 8,
      size: "3000 Sqft",
    },
    {
      id: 4,
      title: "Family home for sale",
      img: "house-4.jpg",
      address: "Sacramento, Chicago, US",
      price: "$1,400",
      beds: 2,
      baths: 2,
      size: "2200 Sqft",
    },
  ];

  return (
    <>
      {/* Page Banner */}
      <div id="page-banner-area" className="page-banner">
        <div className="page-banner-title">
          <div className="text-center">
            <h2>For Rent</h2>

            <Link href="/">
              <i className="lni-home"></i> Home
            </Link>

            <span className="crumbs-spacer">
              <i className="lni-chevron-right"></i>
            </span>

            <span className="current">Rent</span>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="main-container section-padding">
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <div className="col-lg-4 col-md-12 col-xs-12">
              <div className="sidebar sticky right">
                <div className="widget">
                  <h3 className="sidebar-title">Find New Home</h3>

                  {/* Status */}
                  <div className="row with-forms">
                    <div className="col-md-12">
                      <select className="classic">
                        <option>Any Status</option>
                        <option>For Sale</option>
                        <option>For Rent</option>
                      </select>
                    </div>
                  </div>

                  {/* Types */}
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

                  {/* State */}
                  <div className="row with-forms">
                    <div className="col-md-12">
                      <select className="classic">
                        <option>All States</option>
                        <option>Alabama</option>
                        <option>Arkansas</option>
                        <option>California</option>
                        <option>Colorado</option>
                        <option>Connecticut</option>
                        <option>Florida</option>
                        <option>Indiana</option>
                        <option>New York</option>
                        <option>Washington</option>
                      </select>
                    </div>
                  </div>

                  {/* Cities */}
                  <div className="row with-forms">
                    <div className="col-md-12">
                      <select className="classic">
                        <option>All Cities</option>
                        <option>New York</option>
                        <option>California</option>
                        <option>Washington</option>
                        <option>Chicago</option>
                        <option>Phoenix</option>
                        <option>Birmingham</option>
                      </select>
                    </div>
                  </div>

                  {/* Beds/Baths */}
                  <div className="row">
                    <div className="col-md-6">
                      <select className="classic">
                        <option>Beds</option>
                        {[1, 2, 3, 4, 5].map((n) => (
                          <option key={n}>{n}</option>
                        ))}
                      </select>
                    </div>

                    <div className="col-md-6">
                      <select className="classic">
                        <option>Baths</option>
                        {[1, 2, 3, 4, 5].map((n) => (
                          <option key={n}>{n}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Area Range */}
                  <div className="range-area">
                    <label>Area Range</label>
                    <div id="area-range">
                      <input type="text" className="form-control" />
                      <span>sq ft to</span>
                      <input type="text" className="form-control" />
                      <span>sq ft</span>
                    </div>
                  </div>

                  {/* Price Range */}
                  <div className="price-range">
                    <label>Price Range</label>
                    <div id="area-price">
                      <input type="text" className="form-control" />
                      <span>$ to</span>
                      <input type="text" className="form-control" />
                      <span>$</span>
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
                      ].map((item, idx) => (
                        <div key={idx}>
                          <input
                            id={`check-${idx}`}
                            type="checkbox"
                            name="feature"
                          />
                          <label htmlFor={`check-${idx}`}>{item}</label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Search Button */}
                  <button className="fullwidth btn btn-common">Search</button>
                </div>
              </div>
            </div>

            {/* Listings */}
            <div className="col-lg-8 col-md-12 col-xs-12">
              <div className="product-filter">
                <div className="sort-by">
                  <span>Sort by:</span>
                  <div className="sort-by-select">
                    <select className="classic">
                      <option>Default Order</option>
                      <option>Price Low to High</option>
                      <option>Price High to Low</option>
                      <option>Newest</option>
                      <option>Oldest</option>
                    </select>
                  </div>
                </div>

                <div className="layout-switcher">
                  <a href="#" className="list active">
                    <i className="lni-menu"></i>
                  </a>
                  <a href="#" className="grid">
                    <i className="lni-grid"></i>
                  </a>
                </div>

                <p className="text-left">42 homes found</p>
              </div>

              {/* Listing Items */}
              <div className="listing-container list-layout">
                {listings.map((item) => (
                  <div className="property-main" key={item.id}>
                    <div className="property-wrap">
                      <div className="property-item">
                        <div className="item-thumb">
                          <Link className="hover-effect" href="/property">
                            <img
                              className="img-fluid"
                              src={`/assets/img/property/${item.img}`}
                              alt={item.title}
                            />
                          </Link>

                          <div className="label-inner">
                            <span className="label-status label">For Rent</span>
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
                              <span>{item.beds} bds</span> •{" "}
                              <span>{item.baths} ba</span> •{" "}
                              <span>{item.size}</span>
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
                      <a className="btn btn-common" href="#">
                        <i className="lni-chevron-left"></i> Previous
                      </a>
                    </li>

                    <li className="page-item">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>

                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>

                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>

                    <li className="page-item">
                      <a className="btn btn-common" href="#">
                        Next <i className="lni-chevron-right"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
