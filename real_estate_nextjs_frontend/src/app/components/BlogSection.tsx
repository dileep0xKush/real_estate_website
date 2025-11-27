export default function BlogSection() {
  return (
    <section id="blog" className="section-padding">
      <div className="container">
        {/* Section Title */}
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h2 className="section-title">The Blog</h2>
              <p>
                Duis aute irure dolor in reprehed in volupted velit esse dolore
              </p>
            </div>
          </div>

          {/* Blog Post 1 */}
          <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="blog-item text-center">
              <div className="blog-image">
                <a href="#">
                  <img
                    className="img-fluid"
                    src="/assets/img/blog/img1.jpg"
                    alt="Blog Post"
                  />
                </a>
              </div>

              <div className="date">12 April, 2018</div>

              <div className="descr">
                <h3 className="title">
                  <a href="single-blog.html">Visual Design Concept</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Alias laudantium fugiat, eius sint.
                </p>
              </div>

              <div className="blog-footer hide-on-list">
                <div className="float-left">
                  <p className="prop-user">
                    <a href="#">
                      <i className="lni-user"></i> Admin
                    </a>
                  </p>
                </div>

                <div className="float-right">
                  <span>
                    <i className="lni-heart"></i> 350
                  </span>
                  <span>
                    <i className="lni-comments"></i> 30
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="blog-item text-center">
              <div className="blog-image">
                <a href="#">
                  <img
                    className="img-fluid"
                    src="/assets/img/blog/img2.jpg"
                    alt="Blog Post"
                  />
                </a>
              </div>

              <div className="date">12 April, 2018</div>

              <div className="descr">
                <h3 className="title">
                  <a href="single-blog.html">Real Estate Festival - 2018</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Alias laudantium fugiat, eius sint.
                </p>
              </div>

              <div className="blog-footer hide-on-list">
                <div className="float-left">
                  <p className="prop-user">
                    <a href="#">
                      <i className="lni-user"></i> Admin
                    </a>
                  </p>
                </div>

                <div className="float-right">
                  <span>
                    <i className="lni-heart"></i> 350
                  </span>
                  <span>
                    <i className="lni-comments"></i> 30
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="blog-item text-center">
              <div className="blog-image">
                <a href="#">
                  <img
                    className="img-fluid"
                    src="/assets/img/blog/img3.jpg"
                    alt="Blog Post"
                  />
                </a>
              </div>

              <div className="date">12 April, 2018</div>

              <div className="descr">
                <h3 className="title">
                  <a href="single-blog.html">Latest Architectural Design</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Alias laudantium fugiat, eius sint.
                </p>
              </div>

              <div className="blog-footer hide-on-list">
                <div className="float-left">
                  <p className="prop-user">
                    <a href="#">
                      <i className="lni-user"></i> Admin
                    </a>
                  </p>
                </div>

                <div className="float-right">
                  <span>
                    <i className="lni-heart"></i> 350
                  </span>
                  <span>
                    <i className="lni-comments"></i> 30
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
