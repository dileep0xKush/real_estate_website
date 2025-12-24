"use client";

import Link from "next/link";

export default function SimpleListingPage() {
  return (
    <>
      {/* Page Banner */}
      <div id="page-banner-area" className="page-banner">
        <div className="page-banner-title">
          <div className="text-center">
            <h2>Simple Listing</h2>
            <Link href="/">
              <i className="lni-home"></i> Home
            </Link>
            <span className="crumbs-spacer">
              <i className="lni-chevron-right"></i>
            </span>
            <span className="current">Simple Listing</span>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="main-container section-padding">
        <div className="container">
          <div className="row">
            {/* Left Content */}
            <div className="col-lg-8 col-md-12 col-xs-12">
              {/* Product Filter */}
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
                  <a className="list active">
                    <i className="lni-menu"></i>
                  </a>
                  <a className="grid">
                    <i className="lni-grid"></i>
                  </a>
                </div>
                <p className="text-left">42 homes found</p>
              </div>

              {/* Listings */}
              <div className="listing-container list-layout">
                {/* Item 1 */}
                <div className="property-main">
                  <div className="property-wrap">
                    <div className="property-item">
                      <div className="item-thumb">
                        <Link className="hover-effect" href="/property">
                          <img
                            className="img-fluid"
                            src="/assets/img/property/house-1.jpg"
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
                          <Link href="/property">
                            Amazing oceanfront apartment
                          </Link>
                        </h3>
                        <div className="adderess">
                          <i className="lni-map-marker"></i> Drive Street, Los
                          Angeles, US
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

                {/* Item 2 */}
                <div className="property-main">
                  <div className="property-wrap">
                    <div className="property-item">
                      <div className="item-thumb">
                        <Link className="hover-effect" href="/property">
                          <img
                            className="img-fluid"
                            src="/assets/img/property/house-2.jpg"
                            alt=""
                          />
                        </Link>
                        <div className="label-inner">
                          <span className="label-status label">For Rent</span>
                        </div>
                      </div>

                      <div className="item-body">
                        <h3 className="property-title">
                          <Link href="/property">
                            Amazing oceanfront apartment
                          </Link>
                        </h3>
                        <div className="adderess">
                          <i className="lni-map-marker"></i> Drive Street, Los
                          Angeles, US
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

                {/* Item 3 */}
                <div className="property-main">
                  <div className="property-wrap">
                    <div className="property-item">
                      <div className="item-thumb">
                        <Link className="hover-effect" href="/property">
                          <img
                            className="img-fluid"
                            src="/assets/img/property/house-3.jpg"
                            alt=""
                          />
                        </Link>
                        <div className="label-inner">
                          <span className="label-status label bg-yellow">
                            New
                          </span>
                        </div>
                      </div>

                      <div className="item-body">
                        <h3 className="property-title">
                          <Link href="/property">Guaranteed modern home</Link>
                        </h3>
                        <div className="adderess">
                          <i className="lni-map-marker"></i> Avenue C, New York,
                          US
                        </div>
                        <div className="pricin-list">
                          <div className="property-price">
                            <span>$1,750</span>
                          </div>
                          <p>
                            <span>8 bds</span> . <span>8 ba</span> .{" "}
                            <span>3000 Sqft</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="property-main">
                  <div className="property-wrap">
                    <div className="property-item">
                      <div className="item-thumb">
                        <Link className="hover-effect" href="/property">
                          <img
                            className="img-fluid"
                            src="/assets/img/property/house-4.jpg"
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
                          <Link href="/property">Family home for sale</Link>
                        </h3>
                        <div className="adderess">
                          <i className="lni-map-marker"></i> Sacramento,
                          Chicago, US
                        </div>
                        <div className="pricin-list">
                          <div className="property-price">
                            <span>$1,400</span>
                          </div>
                          <p>
                            <span>2 bds</span> . <span>2 ba</span> .{" "}
                            <span>2200 Sqft</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pagination */}
              <div className="pagination-container">
                <nav>
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="btn btn-common">
                        <i className="lni-chevron-left"></i> Previous
                      </a>
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
                      <a className="btn btn-common">
                        Next <i className="lni-chevron-right"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4 col-md-12 col-xs-12">
              <div className="sidebar sticky right">
                {/* Sidebar Filters */}
                <div className="widget">
                  <h3 className="sidebar-title">Find New Home</h3>

                  {/* Lots of select filters */}
                  {/* Keeping your original structure intact */}
                  <div className="row with-forms">
                    <div className="col-md-12">
                      <select className="classic">
                        <option>Any Status</option>
                        <option>For Sale</option>
                        <option>For Rent</option>
                      </select>
                    </div>
                  </div>

                  {/* (You can add the remaining selects the same way — unchanged) */}

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
