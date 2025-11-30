"use client";

import Link from "next/link";

export default function SubmissionFormPage() {
  return (
    <>
      {/* Page Banner */}
      <div id="page-banner-area" className="page-banner">
        <div className="page-banner-title">
          <div className="text-center">
            <h2>Submission Form</h2>

            <Link href="/">
              <i className="lni-home"></i> Home
            </Link>

            <span className="crumbs-spacer">
              <i className="lni-chevron-right"></i>
            </span>

            <span className="current">Submission Form</span>
          </div>
        </div>
      </div>

      {/* Submit Property Section */}
      <section className="user-page submit-property section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Notification Box */}
              <div className="notification-box mb-5">
                <h3>Don t Have an Account?</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean ac tortor at tellus feugiat congue quis ut nunc.
                </p>
              </div>

              {/* Submission Form */}
              <div className="submit-form">
                <form>
                  {/* Basic Info */}
                  <h3 className="heading">Basic Information</h3>

                  <div className="row mb-3">
                    <div className="col-md-12">
                      <label>Property Title</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Property Title"
                      />
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <label>Status</label>
                      <select className="classic">
                        <option>For Sale</option>
                        <option>For Rent</option>
                      </select>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <label>Type</label>
                      <select className="classic">
                        <option>Apartment</option>
                        <option>House</option>
                        <option>Commercial</option>
                        <option>Garage</option>
                        <option>Lot</option>
                      </select>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <label>Price</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="USD"
                      />
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <label>Area/Location</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="SqFt"
                      />
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <label>Bedrooms</label>
                      <select className="classic">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </select>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <label>Bathroom</label>
                      <select className="classic">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>

                  {/* Gallery */}
                  <h3 className="heading">Property Gallery</h3>
                  <div className="row mb-3">
                    <div className="col-lg-12">
                      <div id="drop-file" className="drop-file mb-5">
                        <div className="drop-message">
                          <span>Drop files here to upload</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Location */}
                  <h3 className="heading">Location</h3>
                  <div className="row mb-3">
                    <div className="col-lg-6 col-md-6">
                      <label>Address</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Address"
                      />
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <label>City</label>
                      <select className="classic">
                        <option>Choose City</option>
                        <option>New York</option>
                        <option>Chicago</option>
                        <option>Queens</option>
                        <option>Manhattan</option>
                        <option>San Antonio</option>
                      </select>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <label>State</label>
                      <select className="classic">
                        <option>Choose State</option>
                        <option>Alabama</option>
                        <option>California</option>
                        <option>Connecticut</option>
                        <option>Florida</option>
                        <option>Georgia</option>
                      </select>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <label>Postal Code</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Postal Code"
                      />
                    </div>
                  </div>

                  {/* Detailed Info */}
                  <h3 className="heading">Detailed Information</h3>
                  <div className="row mb-3">
                    <div className="col-lg-12">
                      <label>Detailed Information</label>
                      <textarea
                        className="form-control"
                        placeholder="Detailed Information"
                      ></textarea>
                    </div>

                    <div className="col-lg-4 col-md-4">
                      <label>Building Age (optional)</label>
                      <select className="classic">
                        <option>0–5 Years</option>
                        <option>0–10 Years</option>
                        <option>0–15 Years</option>
                        <option>0–20 Years</option>
                        <option>0–25 Years</option>
                      </select>
                    </div>

                    <div className="col-lg-4 col-md-4">
                      <label>Bedrooms (optional)</label>
                      <select className="classic">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>

                    <div className="col-lg-4 col-md-4">
                      <label>Bathrooms (optional)</label>
                      <select className="classic">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>

                  {/* Features */}
                  <h3 className="heading">Features (optional)</h3>
                  <div className="row mb-3">
                    <div className="col-lg-4 col-md-4">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="air-condition"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="air-condition"
                        >
                          Air Conditioning
                        </label>
                      </div>

                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="swimming-pool"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="swimming-pool"
                        >
                          Swimming Pool
                        </label>
                      </div>

                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="central-heating"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="central-heating"
                        >
                          Central Heating
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-4">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="laundry-room"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="laundry-room"
                        >
                          Laundry Room
                        </label>
                      </div>

                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="gym"
                        />
                        <label className="form-check-label" htmlFor="gym">
                          Gym
                        </label>
                      </div>

                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="window-covering"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="window-covering"
                        >
                          Window Covering
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-4">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="alarm"
                        />
                        <label className="form-check-label" htmlFor="alarm">
                          Alarm
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Contact Details */}
                  <h3 className="heading">Contact Details</h3>
                  <div className="row">
                    <div className="col-lg-4 col-md-4">
                      <label>Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>

                    <div className="col-lg-4 col-md-4">
                      <label>Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>

                    <div className="col-lg-4 col-md-4">
                      <label>Phone</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone"
                      />
                    </div>

                    <div className="col-lg-12 mt-3">
                      <Link href="#" className="btn btn-common">
                        Preview
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
