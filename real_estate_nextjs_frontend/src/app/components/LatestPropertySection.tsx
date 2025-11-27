import Link from "next/link";

export default function LatestPropertySection() {
  return (
    <section className="latest-property section-padding">
      <div className="container">
        {/* Title */}
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h2 className="section-title">Latest Listings</h2>
              <p>
                Duis aute irure dolor in reprehed in volupted velit esse dolore
              </p>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="row">
          <div className="col-md-12 wow fadeIn" data-wow-delay="0.8s">
            {/* Owl Carousel wrapper */}
            <div id="latest-property" className="owl-carousel">
              {/* Item 1 */}
              <div className="item">
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
                          <i className="lni-map-marker"></i> 96 Bay 10th St,
                          Brooklyn, NY 11228
                        </div>

                        <div className="pricin-list">
                          <div className="property-price">
                            <span>$1,600</span>
                          </div>
                          <p>
                            <span>4 bds</span> · <span>4 ba</span> ·{" "}
                            <span>2500 Sqft</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="item">
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
                          <Link href="/property">Family Condo</Link>
                        </h3>

                        <div className="adderess">
                          <i className="lni-map-marker"></i> Louis, Missouri, US
                        </div>

                        <div className="pricin-list">
                          <div className="property-price">
                            <span>$1,700</span>
                          </div>
                          <p>
                            <span>8 bds</span> · <span>8 ba</span> ·{" "}
                            <span>2900 Sqft</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="item">
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
                            <span>5 bds</span> · <span>6 ba</span> ·{" "}
                            <span>2700 Sqft</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Item 4 */}
              <div className="item">
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
                          <span className="label-status label">For Rent</span>
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
                            <span>2 bds</span> · <span>2 ba</span> ·{" "}
                            <span>2200 Sqft</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Item 5 */}
              <div className="item">
                <div className="property-main">
                  <div className="property-wrap">
                    <div className="property-item">
                      <div className="item-thumb">
                        <Link className="hover-effect" href="/property">
                          <img
                            className="img-fluid"
                            src="/assets/img/property/house-5.jpg"
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
                          <Link href="/property">
                            Amazing oceanfront apartment
                          </Link>
                        </h3>

                        <div className="adderess">
                          <i className="lni-map-marker"></i> 53 W 88th St,
                          Dallas, US
                        </div>

                        <div className="pricin-list">
                          <div className="property-price">
                            <span>$1,750</span>
                          </div>
                          <p>
                            <span>6 bds</span> · <span>6 ba</span> ·{" "}
                            <span>2700 Sqft</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Item 6 */}
              <div className="item">
                <div className="property-main">
                  <div className="property-wrap">
                    <div className="property-item">
                      <div className="item-thumb">
                        <Link className="hover-effect" href="/property">
                          <img
                            className="img-fluid"
                            src="/assets/img/property/house-6.jpg"
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
                          <Link href="/property">Luxury home for sale</Link>
                        </h3>

                        <div className="adderess">
                          <i className="lni-map-marker"></i> 365 Webber Street,
                          Washington
                        </div>

                        <div className="pricin-list">
                          <div className="property-price">
                            <span>$1,800</span>
                          </div>
                          <p>
                            <span>5 bds</span> · <span>7 ba</span> ·{" "}
                            <span>2800 Sqft</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Owl Carousel */}
          </div>
        </div>
      </div>
    </section>
  );
}
