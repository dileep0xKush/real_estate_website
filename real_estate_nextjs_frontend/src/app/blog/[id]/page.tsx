"use client";

import Link from "next/link";

export default function BlogSinglePage({ params }) {
  const { id } = params;
  return (
    <>
      {/* Page Banner */}
      <div id="page-banner-area" className="page-banner">
        <div className="page-banner-title">
          <div className="text-center">
            <h2>Property - Details</h2>

            <Link href="/blog">
              <i className="lni-home"></i> Blog
            </Link>

            <span className="crumbs-spacer">
              <i className="lni-chevron-right"></i>
            </span>

            <span className="current">Blog Details</span>
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div id="blog" className="section-padding">
        <div className="container">
          <div className="row">
            {/* Main Blog Post */}
            <div className="col-lg-8 col-md-12 col-xs-12">
              <div className="blog-post single-post">
                <Link href="#" className="post-img">
                  <img
                    className="img-fluid"
                    src="/assets/img/blog/blog-post1.jpg"
                    alt=""
                  />
                </Link>

                <div className="content">
                  <h2>
                    <Link href="#">Great House on The Hills</Link>
                  </h2>

                  <ul className="post-meta">
                    <li>November 12, 2018</li>
                    <li>
                      <Link href="#">5 Comments</Link>
                    </li>
                  </ul>

                  <p className="mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua...
                  </p>

                  <p>
                    velit esse cillum dolore eu fugiat nulla pariatur...
                    voluptatem sequi nesciunt...
                  </p>

                  <ul className="share-buttons mt-5 mb-4">
                    <li>
                      <Link className="fb-share" href="#">
                        <i className="lni-facebook-filled"></i> Share
                      </Link>
                    </li>
                    <li>
                      <Link className="twitter-share" href="#">
                        <i className="lni-twitter-filled"></i> Tweet
                      </Link>
                    </li>
                    <li>
                      <Link className="gplus-share" href="#">
                        <i className="lni-google-plus"></i> Share
                      </Link>
                    </li>
                    <li>
                      <Link className="linkedin-share" href="#">
                        <i className="lni-linkedin-filled"></i> Linkedin
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Author */}
              <div className="author post-block">
                <h4>Meet Author</h4>

                <div className="thumb">
                  <Link href="#">
                    <img
                      src="/assets/img/blog/author-thumb.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </div>

                <div className="body">
                  <h5>Maria Marlin</h5>
                  <Link href="#">jennie@example.com</Link>

                  <p>
                    Nullam ultricies, velit ut varius molestie, ante metus
                    condimentum nisi...
                  </p>
                </div>
              </div>

              {/* Comments */}
              <div id="comments">
                <div className="comment-box">
                  <h3>Comments (5)</h3>

                  <ol className="comments-list">
                    {/* Comment 1 */}
                    <li>
                      <div className="media">
                        <div className="thumb-left">
                          <img
                            className="img-fluid"
                            src="/assets/img/blog/user1.png"
                            alt=""
                          />
                        </div>

                        <div className="info-body">
                          <h4 className="name">Larsen Mortin</h4>
                          <span className="comment-date">
                            <i className="lni-alarm-clock"></i> 18 December 2018
                          </span>

                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit...
                          </p>

                          <Link href="#" className="reply-link">
                            <i className="lni-reply"></i> Reply
                          </Link>
                        </div>
                      </div>
                    </li>

                    {/* Nested reply */}
                    <li>
                      <ul>
                        <li>
                          <div className="media">
                            <div className="thumb-left">
                              <img
                                className="img-fluid"
                                src="/assets/img/blog/user3.png"
                                alt=""
                              />
                            </div>

                            <div className="info-body">
                              <h4 className="name">Hansom Rob</h4>
                              <span className="comment-date">
                                <i className="lni-alarm-clock"></i> 18 December
                                2018
                              </span>

                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit...
                              </p>

                              <Link href="#" className="reply-link">
                                <i className="lni-reply"></i> Reply
                              </Link>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>

                    {/* Comment 3 */}
                    <li>
                      <div className="media">
                        <div className="thumb-left">
                          <img
                            className="img-fluid"
                            src="/assets/img/blog/user1.png"
                            alt=""
                          />
                        </div>

                        <div className="info-body">
                          <h4 className="name">Sticky Fingerz</h4>
                          <span className="comment-date">
                            <i className="lni-alarm-clock"></i> 18 December 2018
                          </span>

                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit...
                          </p>

                          <Link href="#" className="reply-link">
                            <i className="lni-reply"></i> Reply
                          </Link>
                        </div>
                      </div>
                    </li>
                  </ol>

                  {/* Add Comment */}
                  <div id="respond">
                    <h3>Add Comment</h3>

                    <form>
                      <div className="row">
                        <div className="col-lg-12">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Enter Name"
                          />
                        </div>

                        <div className="col-lg-12 mt-3">
                          <input
                            className="form-control"
                            type="email"
                            placeholder="Email"
                          />
                        </div>

                        <div className="col-lg-12 mt-3">
                          <textarea
                            className="form-control"
                            rows="6"
                            placeholder="Message"
                          ></textarea>

                          <button type="submit" className="btn btn-common mt-3">
                            Add Comment
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
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
                          <Link href="#">
                            <img
                              src="/assets/img/blog/blog-widget-01.jpg"
                              alt=""
                            />
                          </Link>
                        </div>

                        <div className="widget-text">
                          <h5>
                            <Link href="#">
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
                          <Link href="#">
                            <img
                              src="/assets/img/blog/blog-widget-02.jpg"
                              alt=""
                            />
                          </Link>
                        </div>

                        <div className="widget-text">
                          <h5>
                            <Link href="#">
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
                          <Link href="#">
                            <img
                              src="/assets/img/blog/blog-widget-03.jpg"
                              alt=""
                            />
                          </Link>
                        </div>

                        <div className="widget-text">
                          <h5>
                            <Link href="#">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
