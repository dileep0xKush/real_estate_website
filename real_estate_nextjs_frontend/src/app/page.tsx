import SearchProperties from "./components/SearchProperties";
import PopularListingsSection from "./components/PopularListingsSection";
import OurAgentsSection from "./components/OurAgentsSection";
import ServicesSection from "./components/ServicesSection";
import LatestPropertySection from "./components/LatestPropertySection";
import AboutUsSection from "./components/AboutUsSection";
import CounterSection from "./components/CounterSection";
import IntroSection from "./components/IntroSection";
import ClientLogoSection from "./components/ClientLogoSection";
import PricingSection from "./components/PricingSection";
import TestimonialSection from "./components/TestimonialSection";
import BlogSection from "./components/BlogSection";

export default function Home() {
  return (
    <>
      <section id="intro" className="section-intro">
        <div className="search-container">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h4 className="intro-sub-heading">
                  You are using Fre Lite Version!
                </h4>
                <h2 className="intro-title">
                  Please, Make Purchase Full Version to Get All Pages and
                  Features
                </h2>
                <a
                  href="https://rebrand.ly/estatebit-purchase-ud"
                  rel="nofollow"
                  className="btn btn-danger btn-lg"
                >
                  PURCHASE NOW
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SearchProperties />
      <PopularListingsSection />
      <OurAgentsSection />
      <ServicesSection />
      <LatestPropertySection />
      <AboutUsSection />
      <CounterSection />
      <IntroSection />
      <ClientLogoSection />
      <PricingSection />
      <TestimonialSection />
      <BlogSection />
    </>
  );
}
