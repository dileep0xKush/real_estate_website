export default function AboutUsSection() {
  return (
    <section className="featured-bg section-padding">
      <div className="container">
        {/* Title */}
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h2 className="section-title">About Us</h2>
              <p>
                Duis aute irure dolor in reprehed in volupted velit esse dolore
              </p>
            </div>
          </div>
        </div>

        {/* Content Row */}
        <div className="row">
          {/* Image */}
          <div className="col-md-12 col-lg-6 col-xs-12">
            <img
              className="img-fluid"
              src="/assets/img/about/img-2.jpg"
              alt="About Us"
            />
          </div>

          {/* Text Content */}
          <div className="col-md-12 col-lg-6 col-xs-12">
            <h2 className="intro-title">Who We Are</h2>

            <h3 className="title-sub">
              Best and Award Winning <br /> Real Estate Business in USA 2019
            </h3>

            <p className="intro-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
              nostrum, doloremque quaerat sit tempora eius est reiciendis
              accusamus magnam quae. Explicabo dolore officia, iure a ullam
              aliquam nemo excepturi, repellat. Quod ut delectus ad tempora.
            </p>

            <div className="row">
              {/* Feature 1 */}
              <div className="col-lg-6 col-md-12 col-xs-12">
                <div className="featured-item">
                  <div className="icon">
                    <i className="lni-medall"></i>
                  </div>
                  <h3>
                    <a href="#">Certified Company</a>
                  </h3>
                  <div className="featured-content">
                    <p>
                      We ll generate a sitemap for your site, submit it to
                      search engines and track crawler access.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="col-lg-6 col-md-12 col-xs-12">
                <div className="featured-item">
                  <div className="icon">
                    <i className="lni-thumbs-up"></i>
                  </div>
                  <h3>
                    <a href="#">Highly Experienced</a>
                  </h3>
                  <div className="featured-content">
                    <p>
                      well ll generate a sitemap for your site, submit it to
                      search engines and track crawler access.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
