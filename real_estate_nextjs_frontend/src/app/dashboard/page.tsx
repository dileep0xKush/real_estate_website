"use client";

import Link from "next/link";

export default function DashboardPage() {
  return (
    <>
      {/* Page Banner */}
      <div id="page-banner-area" className="page-banner">
        <div className="page-banner-title">
          <div className="text-center">
            <h2>Dashboard</h2>

            <Link href="/">
              <i className="lni-home"></i> Home
            </Link>

            <span className="crumbs-spacer">
              <i className="lni-chevron-right"></i>
            </span>

            <span className="current">Dashboard</span>
          </div>
        </div>
      </div>

      {/* User Section */}
      <section className="user-page section-padding">
        <div className="container">
          <div className="row">
            {/* Sidebar Profile */}
            <div className="col-lg-4 col-md-5 col-xs-12">
              <div className="user-profile-box">
                <div className="header clearfix">
                  <h2>Justyna Michallek</h2>
                  <h4>Real Estate Agent</h4>
                  <img
                    src="/assets/img/avatar/avatar-2.jpg"
                    alt="avatar"
                    className="img-fluid profile-img"
                  />
                </div>

                <div className="detail clearfix">
                  <ul>
                    <li>
                      <Link className="active" href="/dashboard">
                        <i className="lni-files"></i> Dashboard
                      </Link>
                    </li>

                    <li>
                      <Link href="/user-profile">
                        <i className="lni-user"></i> Profile
                      </Link>
                    </li>

                    <li>
                      <Link href="/my-properties">
                        <i className="lni-home"></i> My Properties
                      </Link>
                    </li>

                    <li>
                      <Link href="/favorites">
                        <i className="lni-heart"></i> Favorited Properties
                      </Link>
                    </li>

                    <li>
                      <Link href="/submit-property">
                        <i className="lni-plus"></i> Submit New Property
                      </Link>
                    </li>

                    <li>
                      <Link href="/change-password">
                        <i className="lni-lock"></i> Change Password
                      </Link>
                    </li>

                    <li>
                      <Link href="/">
                        <i className="lni-logout"></i> Log Out
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="col-lg-8 col-md-7 col-xs-12">
              {/* Stats Boxes */}
              <div className="dashborad-box">
                <h4 className="title">Manage Dashboard</h4>

                <div className="section-body">
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="item">
                        <div className="icon">
                          <span className="lni-map-marker"></span>
                        </div>
                        <div className="info">
                          <h6 className="number">12</h6>
                          <p className="type">Listing</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-4">
                      <div className="item">
                        <div className="icon">
                          <span className="lni-thumbs-up"></span>
                        </div>
                        <div className="info">
                          <h6 className="number">30</h6>
                          <p className="type">Review</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-4">
                      <div className="item">
                        <div className="icon">
                          <span className="lni-comments"></span>
                        </div>
                        <div className="info">
                          <h6 className="number">18</h6>
                          <p className="type">Messages</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Listing Table */}
              <div className="dashborad-box">
                <h4 className="title">Listing</h4>

                <div className="section-body listing-table">
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>Listing Name</th>
                          <th>Date</th>
                          <th>Rating</th>
                          <th>Status</th>
                          <th>Edit</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>Amazing oceanfront apartment</td>
                          <td>17 May 2018</td>
                          <td className="rating">
                            <span>4.3</span>
                          </td>
                          <td className="status">
                            <span className="active">Active</span>
                          </td>
                          <td className="edit">
                            <Link href="#">
                              <span className="lni-pencil"></span>
                            </Link>
                          </td>
                        </tr>

                        <tr>
                          <td>Red Blue Restaurant</td>
                          <td>17 May 2018</td>
                          <td className="rating">
                            <span>4.3</span>
                          </td>
                          <td className="status">
                            <span className="active">Active</span>
                          </td>
                          <td className="edit">
                            <Link href="#">
                              <span className="lni-pencil"></span>
                            </Link>
                          </td>
                        </tr>

                        <tr>
                          <td>Amazing oceanfront apartment</td>
                          <td>12 June 2018</td>
                          <td className="rating">
                            <span>4.3</span>
                          </td>
                          <td className="status">
                            <span className="non-active">Non-Active</span>
                          </td>
                          <td className="edit">
                            <Link href="#">
                              <span className="lni-pencil"></span>
                            </Link>
                          </td>
                        </tr>

                        <tr>
                          <td>Luxury home for sale</td>
                          <td>31 Aug 2018</td>
                          <td className="rating">
                            <span>4.3</span>
                          </td>
                          <td className="status">
                            <span className="active">Active</span>
                          </td>
                          <td className="edit">
                            <Link href="#">
                              <span className="lni-pencil"></span>
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="dashborad-box">
                <h4 className="title">Message</h4>

                <div className="section-body">
                  <div className="messages">
                    <div className="message">
                      <div className="thumb">
                        <img
                          src="/assets/img/dashboard/thumb-1.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>

                      <div className="body">
                        <h6>
                          David Givens <span className="badge">Unread</span>
                        </h6>
                        <p className="post-time">3 Minutes ago</p>
                        <p className="content">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit.
                        </p>

                        <div className="controller">
                          <ul>
                            <li>
                              <Link href="#">
                                <i className="lni-eye"></i>
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <i className="lni-trash"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="message">
                      <div className="thumb">
                        <img
                          src="/assets/img/dashboard/thumb-2.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="body">
                        <h6>Darrell S. Allen</h6>
                        <p className="post-time">19 Minutes ago</p>
                        <p className="content">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit.
                        </p>

                        <div className="controller">
                          <ul>
                            <li>
                              <Link href="#">
                                <i className="lni-eye"></i>
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <i className="lni-trash"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reviews */}
              <div className="dashborad-box">
                <h4 className="title">Review</h4>

                <div className="section-body">
                  <div className="reviews">
                    <div className="review">
                      <div className="thumb">
                        <img
                          src="/assets/img/dashboard/thumb-1.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>

                      <div className="body">
                        <h6>
                          John Doe
                          <span className="stars">
                            <i className="lni-star-filled"></i>
                            <i className="lni-star-filled"></i>
                            <i className="lni-star-filled"></i>
                            <i className="lni-star"></i>
                            <i className="lni-star"></i>
                          </span>
                        </h6>

                        <p className="post-time">5 hours ago</p>
                        <p className="content">Lorem ipsum dolor sit amet.</p>

                        <div className="controller">
                          <ul>
                            <li>
                              <Link href="#">
                                <i className="lni-check-box"></i>
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <i className="lni-pencil-alt"></i>
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <i className="lni-reply"></i>
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <i className="lni-trash"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="review">
                      <div className="thumb">
                        <img
                          src="/assets/img/dashboard/thumb-2.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>

                      <div className="body">
                        <h6>
                          Charli Maria
                          <span className="stars">
                            <i className="lni-star-filled"></i>
                            <i className="lni-star-filled"></i>
                            <i className="lni-star"></i>
                            <i className="lni-star"></i>
                          </span>
                        </h6>

                        <p className="post-time">39 Minutes ago</p>
                        <p className="content">Lorem ipsum dolor sit amet.</p>

                        <div className="controller">
                          <ul>
                            <li>
                              <Link href="#">
                                <i className="lni-check-box"></i>
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <i className="lni-pencil-alt"></i>
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <i className="lni-reply"></i>
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <i className="lni-trash"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Personal Information Form */}
              <div className="dashborad-box">
                <h3 className="heading">Personal Information</h3>

                <div className="section-inforamation">
                  <form>
                    <div className="row">
                      <div className="col-sm-6">
                        <label>First Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your First name"
                        />
                      </div>

                      <div className="col-sm-6">
                        <label>Last Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your Last name"
                        />
                      </div>

                      <div className="col-sm-6">
                        <label>Email Address</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Ex: example@domain.com"
                        />
                      </div>

                      <div className="col-sm-6">
                        <label>Phone Number</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Ex: +1-0000-0000-00"
                        />
                      </div>

                      <div className="col-lg-12">
                        <label>Address</label>
                        <textarea
                          className="form-control"
                          placeholder="Write your address here"
                        ></textarea>
                      </div>

                      <div className="col-lg-12">
                        <label>About Yourself</label>
                        <textarea
                          className="form-control"
                          placeholder="Write about yourself"
                        ></textarea>
                      </div>
                    </div>

                    {/* Password Update */}
                    <div className="password-section">
                      <h6>Update Password</h6>

                      <div className="row">
                        <div className="col-sm-6">
                          <label>New Password</label>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Write new password"
                          />
                        </div>

                        <div className="col-sm-6">
                          <label>Repeat Password</label>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Write same password again"
                          />
                        </div>
                      </div>
                    </div>

                    <button className="btn btn-common mt-3">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
