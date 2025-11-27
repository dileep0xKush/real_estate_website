export default function CounterSection() {
  return (
    <section
      className="counter-section section-padding"
      data-stellar-background-ratio="0.5"
    >
      <div className="container">
        <div className="row">
          {/* Counter Item 1 */}
          <div className="col-lg-3 col-md-6 col-xs-12 work-counter-widget text-center">
            <div className="counter">
              <div className="icon">
                <i className="lni-users"></i>
              </div>
              <div className="counterUp">6252</div>
              <p>Happy Customers</p>
            </div>
          </div>

          {/* Counter Item 2 */}
          <div className="col-lg-3 col-md-6 col-xs-12 work-counter-widget text-center">
            <div className="counter">
              <div className="icon">
                <i className="lni-apartment"></i>
              </div>
              <div className="counterUp">3091</div>
              <p>Completed Projects</p>
            </div>
          </div>

          {/* Counter Item 3 */}
          <div className="col-lg-3 col-md-6 col-xs-12 work-counter-widget text-center">
            <div className="counter">
              <div className="icon">
                <i className="lni-key"></i>
              </div>
              <div className="counterUp">1200</div>
              <p>Property Sold</p>
            </div>
          </div>

          {/* Counter Item 4 */}
          <div className="col-lg-3 col-md-6 col-xs-12 work-counter-widget text-center">
            <div className="counter">
              <div className="icon">
                <i className="lni-cup"></i>
              </div>
              <div className="counterUp">79</div>
              <p>Awards Win</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
