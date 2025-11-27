export default function PricingSection() {
  return (
    <section className="pricing section-padding">
      <div className="container">

        {/* Title */}
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h2 className="section-title">Pricing Plans</h2>
              <p>
                Duis aute irure dolor in reprehed in volupted velit esse dolore
              </p>
            </div>
          </div>
        </div>

        {/* Pricing Tables */}
        <div className="row">

          {/* Plan 1 – Personal */}
          <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="pricing-table text-center">
              <div className="table-header">
                <h3>Personal</h3>
              </div>

              <div className="plan">
                <h3 className="price">$99</h3>
                <p className="period">NO DISCOUNT ON RENEWAL</p>
              </div>

              <div className="plan-info">
                <p>
                  <strong>
                    <i className="lni-check-box"></i> Ad Visibility: 3 Months
                  </strong>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>

                <p>
                  <strong>
                    <i className="lni-check-box"></i> Number of Ads: 15
                  </strong>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>

                <p>
                  <strong>
                    <i className="lni-check-box"></i> Featured Ads: 5
                  </strong>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>

                <div className="button-area">
                  <a href="#" className="btn btn-common btn-lg">
                    Get Started Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Plan 2 – Business */}
          <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="pricing-table pricing-active text-center">
              <div className="table-header">
                <h3>Business</h3>
              </div>

              <div className="plan">
                <h3 className="price">$199</h3>
                <p className="period">10% Discount on renewal</p>
              </div>

              <div className="plan-info">
                <p>
                  <strong>
                    <i className="lni-check-box"></i> Ad Visibility: 5 Months
                  </strong>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>

                <p>
                  <strong>
                    <i className="lni-check-box"></i> Number of Ads: 50
                  </strong>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>

                <p>
                  <strong>
                    <i className="lni-check-box"></i> Featured Ads: 10
                  </strong>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>

                <div className="button-area">
                  <a href="#" className="btn btn-common btn-lg">
                    Get Started Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Plan 3 – Ultimate */}
          <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="pricing-table text-center">
              <div className="table-header">
                <h3>Ultimate</h3>
              </div>

              <div className="plan">
                <h3 className="price">$999</h3>
                <p className="period">20% Discount on renewal</p>
              </div>

              <div className="plan-info">
                <p>
                  <strong>
                    <i className="lni-check-box"></i> Ad Visibility: 12 Months
                  </strong>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>

                <p>
                  <strong>
                    <i className="lni-check-box"></i> Number of Ads: 100
                  </strong>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>

                <p>
                  <strong>
                    <i className="lni-check-box"></i> Featured Ads: 30
                  </strong>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>

                <div className="button-area">
                  <a href="#" className="btn btn-common btn-lg">
                    Get Started Now
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
