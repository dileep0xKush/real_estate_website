export default function SearchProperties() {
  return (
    <div className="search-container">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h2 className="section-title">Search Properties</h2>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-xs-12">
              <div className="search-category-container">
                <label className="styled-select">
                  <select className="classic">
                    <option>All Actions</option>
                    <option>Rentals (12)</option>
                    <option>Sales (17)</option>
                  </select>
                </label>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-xs-12">
              <div className="search-category-container">
                <label className="styled-select">
                  <select className="classic">
                    <option>All Types</option>
                    <option>Apartments (3)</option>
                    <option>Houses (2)</option>
                    <option>Condos (1)</option>
                    <option>Industrial (2)</option>
                    <option>Land (3)</option>
                    <option>Offices (1)</option>
                    <option>Retail (2)</option>
                    <option>Villas (1)</option>
                  </select>
                </label>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-xs-12">
              <div className="search-category-container">
                <label className="styled-select">
                  <select className="classic">
                    <option>All Cities</option>
                    <option>New York</option>
                    <option>California</option>
                    <option>Washington</option>
                    <option>Chicago</option>
                    <option>Phoenix</option>
                    <option>Birmingham</option>
                  </select>
                </label>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-xs-12">
              <div className="text-right btn-section">
                <button type="button" className="btn btn-common">
                  <i className="lni-search"></i> Search
                </button>
              </div>
            </div>
          </div>

          <div
            className="row range-slider option-hide"
            style={{ display: "none" }}
          >
            <div className="col-lg-3 col-md-6 col-xs-12">
              <div className="search-category-container">
                <label className="styled-select">
                  <select className="classic">
                    <option>All Area</option>
                    <option>San Jose</option>
                    <option>Salt Lake City</option>
                    <option>Las Vegas</option>
                    <option>Boston</option>
                    <option>Tampa</option>
                    <option>Orlando</option>
                  </select>
                </label>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-xs-12">
              <div className="search-category-container">
                <label className="styled-select">
                  <select className="classic">
                    <option>Bedrooms</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                  </select>
                </label>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 col-xs-12">
              <input type="text" id="range" name="range" />
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 text-left">
              <a href="#" className="show-options">
                More options
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
