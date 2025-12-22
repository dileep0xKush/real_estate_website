"use client";

import Link from "next/link";

export default function BlogPage() {
  return (
    <>
      {/* Page Banner */}
      <div id="page-banner-area" className="page-banner">
        <div className="page-banner-title">
          <div className="text-center">
            <h2>Property - Blog</h2>

            <Link href="/">
              <i className="lni-home"></i> Home
            </Link>

            <span className="crumbs-spacer">
              <i className="lni-chevron-right"></i>
            </span>

            <span className="current">Blog</span>
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div id="blog" className="section-padding">
        <div className="container">
          <div className="row">
            {/* Blog Posts (Left Side) */}
            <div className="col-lg-8 col-md-12 col-xs-12">
              {/* Post 1 */}
              <div className="blog-post">
                <Link href="/blog/1" className="post-img">
                  <img
                    className="img-fluid"
                    src="/assets/img/blog/blog-post1.jpg"
                    alt=""
                  />
                </Link>

                <div className="content">
                  <h2>
                    <Link href="/blog/1">Great House on The Hills</Link>
                  </h2>

                  <ul className="post-meta">
                    <li>November 12, 2018</li>
                    <li>
                      <Link href="#">5 Comments</Link>
                    </li>
                  </ul>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    eiusmod tempor incididunt ut labore...
                  </p>

                  <Link href="/blog/1" className="btn btn-common read-more">
                    Read More <i className="lni-chevron-right"></i>
                  </Link>
                </div>
              </div>

              {/* Post 2 */}
              <div className="blog-post">
                <Link href="/blog/2" className="post-img">
                  <img
                    className="img-fluid"
                    src="/assets/img/blog/blog-post2.jpg"
                    alt=""
                  />
                </Link>

                <div className="content">
                  <h2>
                    <Link href="/blog/2">Garden that has Flowers</Link>
                  </h2>

                  <ul className="post-meta">
                    <li>November 12, 2018</li>
                    <li>
                      <Link href="#">5 Comments</Link>
                    </li>
                  </ul>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    eiusmod tempor incididunt ut labore...
                  </p>

                  <Link href="/blog/2" className="btn btn-common read-more">
                    Read More <i className="lni-chevron-right"></i>
                  </Link>
                </div>
              </div>

              {/* Post 3 */}
              <div className="blog-post">
                <Link href="/blog/3" className="post-img">
                  <img
                    className="img-fluid"
                    src="/assets/img/blog/blog-post3.jpg"
                    alt=""
                  />
                </Link>

                <div className="content">
                  <h2>
                    <Link href="/blog/3">Normal Post with Image</Link>
                  </h2>

                  <ul className="post-meta">
                    <li>November 12, 2018</li>
                    <li>
                      <Link href="#">5 Comments</Link>
                    </li>
                  </ul>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    eiusmod tempor incididunt ut labore...
                  </p>

                  <Link href="/blog/3" className="btn btn-common read-more">
                    Read More <i className="lni-chevron-right"></i>
                  </Link>
                </div>
              </div>

              {/* Post 4 */}
              <div className="blog-post">
                <Link href="/blog/4" className="post-img">
                  <img
                    className="img-fluid"
                    src="/assets/img/blog/blog-post4.jpg"
                    alt=""
                  />
                </Link>

                <div className="content">
                  <h2>
                    <Link href="/blog/4">Great House on The Hills</Link>
                  </h2>

                  <ul className="post-meta">
                    <li>November 12, 2018</li>
                    <li>
                      <Link href="#">5 Comments</Link>
                    </li>
                  </ul>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    eiusmod tempor incididunt ut labore...
                  </p>

                  <Link href="/blog/4" className="btn btn-common read-more">
                    Read More <i className="lni-chevron-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar (Right) */}
            <div className="col-lg-4 col-md-12 col-xs-12">
              <div className="sidebar right">
                {/* Search */}
                <div className="widget">
                  <h3 className="sidebar-title">Search Blog</h3>

                  <div className="search-blog-input">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Type and hit enter"
                    />
                    <i className="lni-search"></i>
                  </div>
                </div>

                {/* Popular Posts */}
                <div className="widget">
                  <h3 className="sidebar-title">Popular Posts</h3>

                  <ul className="widget-tabs">
                    <li>
                      <div className="widget-content">
                        <div className="widget-thumb">
                          <Link href="/blog/10">
                            <img
                              src="/assets/img/blog/blog-widget-01.jpg"
                              alt=""
                            />
                          </Link>
                        </div>

                        <div className="widget-text">
                          <h5>
                            <Link href="/blog/10">
                              What to Do a Year Before Buying Apartment
                            </Link>
                          </h5>

                          <span>October 26, 2018</span>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="widget-content">
                        <div className="widget-thumb">
                          <Link href="/blog/11">
                            <img
                              src="/assets/img/blog/blog-widget-02.jpg"
                              alt=""
                            />
                          </Link>
                        </div>

                        <div className="widget-text">
                          <h5>
                            <Link href="/blog/11">
                              Bedroom Colors You will Never Regret
                            </Link>
                          </h5>

                          <span>November 9, 2018</span>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="widget-content">
                        <div className="widget-thumb">
                          <Link href="/blog/12">
                            <img
                              src="/assets/img/blog/blog-widget-03.jpg"
                              alt=""
                            />
                          </Link>
                        </div>

                        <div className="widget-text">
                          <h5>
                            <Link href="/blog/12">
                              8 Tips to Help You Finding New Home
                            </Link>
                          </h5>

                          <span>November 12, 2018</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Social Icons */}
                <div className="widget widget-social">
                  <h3 className="sidebar-title">Social Media</h3>

                  <ul className="social-icons">
                    <li>
                      <Link href="#" className="twitter">
                        <i className="lni-twitter-filled"></i>
                      </Link>
                    </li>

                    <li>
                      <Link href="#" className="facebook">
                        <i className="lni-facebook-filled"></i>
                      </Link>
                    </li>

                    <li>
                      <Link href="#" className="google">
                        <i className="lni-google-plus"></i>
                      </Link>
                    </li>

                    <li>
                      <Link href="#" className="linkedin">
                        <i className="lni-linkedin-filled"></i>
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Featured Properties */}
                <div className="widget">
                  <h3 className="sidebar-title">Featured Properties</h3>

                  <div id="listing-carousel" className="owl-carousel">
                    <div className="item">
                      <div className="listing-item">
                        <Link href="#" className="listing-img-container">
                          <img
                            src="/assets/img/productinfo/listing1.jpg"
                            alt=""
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

                    <div className="item">
                      <div className="listing-item">
                        <Link href="#" className="listing-img-container">
                          <img
                            src="/assets/img/productinfo/listing2.jpg"
                            alt=""
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
