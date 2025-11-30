"use client";

import Link from "next/link";

export default function FAQPage() {
  return (
    <>
      {/* Page Banner */}
      <div id="page-banner-area" className="page-banner">
        <div className="page-banner-title">
          <div className="text-center">
            <h2>FAQ</h2>

            <Link href="/">
              <i className="lni-home"></i> Home
            </Link>

            <span className="crumbs-spacer">
              <i className="lni-chevron-right"></i>
            </span>

            <span className="current">FAQ</span>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="main-container section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-xs-12">
              <h2 className="mt-3 mb-5 text-center">
                Frequently Asked Questions
              </h2>

              {/* FAQ Accordion */}
              <div className="panel-group" id="accordion">
                {/* Item 1 */}
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a data-bs-toggle="collapse" href="#collapseOne">
                        Can a home depreciate in value?
                      </a>
                    </h4>
                  </div>

                  <div
                    id="collapseOne"
                    className="panel-collapse collapse show"
                  >
                    <div className="panel-body">
                      <p>
                        Older homes can generally cost less than new homes,
                        however, new homes can sometimes also cost less. Many
                        older homes have fully developed landscaping, which may
                        include thousands of dollars of added value.
                      </p>
                      <p>
                        Taxes on some older homes may also be lower. Some buyers
                        love older homes but worry about maintenance—this is
                        where a good home warranty brings peace of mind.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a data-bs-toggle="collapse" href="#collapseTwo">
                        Is an older home as good a value as a new home?
                      </a>
                    </h4>
                  </div>

                  <div id="collapseTwo" className="panel-collapse collapse">
                    <div className="panel-body">
                      <p>
                        New homes must follow strict construction guidelines,
                        especially in regions with earthquake or fire safety
                        standards. They often support modern conveniences
                        better.
                      </p>
                      <p>
                        In the end, the right choice depends on your needs and
                        lifestyle.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a data-bs-toggle="collapse" href="#collapseThree">
                        What is a broker?
                      </a>
                    </h4>
                  </div>

                  <div id="collapseThree" className="panel-collapse collapse">
                    <div className="panel-body">
                      <p>
                        A broker is an agent licensed to run and operate a real
                        estate office. Every real estate office has at least one
                        principal broker.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a data-bs-toggle="collapse" href="#collapseFour">
                        How is interest calculated on a mortgage loan?
                      </a>
                    </h4>
                  </div>

                  <div id="collapseFour" className="panel-collapse collapse">
                    <div className="panel-body">
                      <p>
                        Most mortgages calculate interest in arrears using a
                        360-day year (12 months × 30 days). When you pay in
                        February, you’re actually paying interest for January.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Item 5 */}
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a data-bs-toggle="collapse" href="#collapseFive">
                        Is there a minimum credit score?
                      </a>
                    </h4>
                  </div>

                  <div id="collapseFive" className="panel-collapse collapse">
                    <div className="panel-body">
                      <p>
                        Title insurance protects both lender and buyer from
                        financial loss due to disputes over property ownership.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Accordion */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
