"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header id="header-wrap">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="row">
            {/* Left Side */}
            <div className="col-lg-7 col-md-8 col-xs-12">
              <ul className="links clearfix">
                <li>
                  <i className="lni-phone-handset"></i> 1-800-555-1234
                </li>
                <li>
                  <i className="lni-envelope"></i> info@example.com
                </li>

                <li>
                  <Link href="#">
                    <i className="lni-map-marker"></i> York Blvd, Los Angeles,
                    US
                  </Link>
                </li>
              </ul>
            </div>

            {/* Right Side */}
            <div className="col-lg-5 col-md-4 col-xs-12">
              <div className="roof-social float-right">
                <Link href="#" className="facebook">
                  <i className="lni-facebook-filled"></i>
                </Link>
                <Link href="#" className="twitter">
                  <i className="lni-twitter-filled"></i>
                </Link>
                <Link href="#" className="instagram">
                  <i className="lni-instagram-filled"></i>
                </Link>
                <Link href="#" className="linkedin">
                  <i className="lni-linkedin-filled"></i>
                </Link>
              </div>

              <div className="header-top-right float-right">
                <Link href="/auth/login" className="header-top-button">
                  <i className="lni-lock"></i> Log In
                </Link>{" "}
                |
                <Link href="/auth/register" className="header-top-button">
                  <i className="lni-pencil"></i> Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav
        className="navbar navbar-expand-lg navbar-light bg-white"
        data-toggle="sticky-onscroll"
      >
        <div className="container">
          {/* Branding */}
          <div className="navbar-header">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#main-navbar"
              aria-controls="main-navbar"
              aria-expanded="false"
            >
              <span className="navbar-toggler-icon"></span>
              <span className="lin-menu"></span>
            </button>

            <Link className="navbar-brand" href="/">
              <img src="/assets/img/logo.png" alt="Logo" />
            </Link>
          </div>

          {/* Menu */}
          <div className="collapse navbar-collapse" id="main-navbar">
            <ul className="navbar-nav mr-auto w-100 justify-content-center">
              {/* Home */}
              <li className="nav-item dropdown active">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-toggle="dropdown"
                >
                  Home <i className="fa fa-angle-down"></i>
                </a>
                <div className="dropdown-menu">
                  <Link className="dropdown-item active" href="/">
                    Home V1
                  </Link>
                  <Link className="dropdown-item" href="#">
                    Home V2
                  </Link>
                  <Link className="dropdown-item" href="#">
                    Home V3
                  </Link>
                </div>
              </li>

              {/* Listing */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-toggle="dropdown"
                >
                  Listing <i className="fa fa-angle-down"></i>
                </a>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" href="/listing/simple">
                    Simple Listing
                  </Link>
                  <Link className="dropdown-item" href="/listing/grid">
                    Grid Listing
                  </Link>
                  <Link className="dropdown-item" href="/listing/map">
                    Listing with Map
                  </Link>
                </div>
              </li>

              {/* Property */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-toggle="dropdown"
                >
                  Property <i className="fa fa-angle-down"></i>
                </a>
                <div className="dropdown-menu">
                  <Link
                    className="dropdown-item"
                    href="/property/default-variation"
                  >
                    Default Variation
                  </Link>
                  <Link
                    className="dropdown-item"
                    href="/property/single-property"
                  >
                    Single Property
                  </Link>
                  <Link className="dropdown-item" href="/property/full-gallery">
                    Full Gallery
                  </Link>
                </div>
              </li>

              {/* Gallery */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Gallery <i className="fa fa-angle-down"></i>
                </a>

                <ul className="dropdown-menu">
                  <li>
                    <Link href="/gallery/2-columns" className="dropdown-item">
                      2 Columns
                    </Link>
                  </li>
                  <li>
                    <Link href="/gallery/3-columns" className="dropdown-item">
                      3 Columns
                    </Link>
                  </li>
                  <li>
                    <Link href="/gallery/4-columns" className="dropdown-item">
                      4 Columns
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Pages */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-toggle="dropdown"
                >
                  Pages <i className="fa fa-angle-down"></i>
                </a>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" href="/about-us">
                    About Us
                  </Link>

                  <Link className="dropdown-item" href="/agents">
                    Agents
                  </Link>

                  <Link className="dropdown-item" href="/for-rent">
                    For Rent
                  </Link>

                  <Link className="dropdown-item" href="/for-sale">
                    For Sale
                  </Link>

                  <Link className="dropdown-item" href="/pricing-tables">
                    Pricing Tables
                  </Link>

                  <Link className="dropdown-item" href="/dashboard">
                    Dashboard
                  </Link>

                  <Link className="dropdown-item" href="/submission-form">
                    Submission Form
                  </Link>

                  <Link className="dropdown-item" href="/faq">
                    FAQ
                  </Link>

                  <Link className="dropdown-item" href="/testimonials">
                    Testimonials
                  </Link>
                </div>
              </li>

              {/* Blog */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-toggle="dropdown"
                >
                  Blog <i className="fa fa-angle-down"></i>
                </a>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" href="/blog">
                    Blog Page
                  </Link>
                  <Link className="dropdown-item" href="#">
                    Blog Single
                  </Link>
                </div>
              </li>

              {/* Contact */}
              <li className="nav-item">
                <Link className="nav-link" href="/contact-us">
                  Contact Us
                </Link>
              </li>
            </ul>

            {/* Search */}
            <div className="search-add float-right">
              <form>
                <div className="form-group">
                  <input type="search" placeholder="Search Here" required />
                  <button type="submit" className="search-btn">
                    <span className="lni-search"></span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <ul className="mobile-menu">
          <li>
            <Link href="/">Home</Link>
            <ul className="dropdown">
              <li>
                <Link href="/" className="active">
                  Home V1
                </Link>
              </li>
              <li>
                <Link href="#">Home V2</Link>
              </li>
              <li>
                <Link href="#">Home V3</Link>
              </li>
            </ul>
          </li>

          <li>
            <a href="#">Listing</a>
            <ul className="dropdown">
              <li>
                <Link href="/listing">Simple Listing</Link>
              </li>
              <li>
                <Link href="#">Grid Listing</Link>
              </li>
              <li>
                <Link href="#">Listing with Map</Link>
              </li>
            </ul>
          </li>

          <li>
            <a href="#">Property</a>
            <ul className="dropdown">
              <li>
                <Link href="/property">Default Variation</Link>
              </li>
              <li>
                <a href="#">Single Property</a>
              </li>
              <li>
                <a href="#">Full Gallery</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#">Gallery</a>
            <ul className="dropdown">
              <li>
                <a href="#">2 Columns</a>
              </li>
              <li>
                <a href="#">3 Columns</a>
              </li>
              <li>
                <a href="#">4 Columns</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#">Pages</a>
            <ul className="dropdown">
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/agents">Agents</Link>
              </li>
              <li>
                <Link href="/rent">For Rent</Link>
              </li>
              <li>
                <Link href="/sale">For Sale</Link>
              </li>
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
              <li>
                <Link href="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link href="/submit-property">Submission Form</Link>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
              <li>
                <Link href="/testimonials">Testimonials</Link>
              </li>
            </ul>
          </li>

          <li>
            <a href="#">Blog</a>
            <ul className="dropdown">
              <li>
                <Link href="/blog">Blog Page</Link>
              </li>
              <li>
                <Link href="#">Blog Single</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>

      <div className="clearfix"></div>
    </header>
  );
}
