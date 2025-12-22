import SearchProperties from "./components/SearchProperties";
import PopularListingsSection from "./components/PopularListingsSection";
import OurAgentsSection from "./components/OurAgentsSection";
import ServicesSection from "./components/ServicesSection";
import LatestPropertySection from "./components/LatestPropertySection";
import AboutUsSection from "./components/AboutUsSection";
import CounterSection from "./components/CounterSection";
import ClientLogoSection from "./components/ClientLogoSection";
import PricingSection from "./components/PricingSection";
import TestimonialSection from "./components/TestimonialSection";
import BlogSection from "./components/BlogSection";

export default function Home() {
  return (
    <>
      <SearchProperties />
      <PopularListingsSection />
      <OurAgentsSection />
      <ServicesSection />
      <LatestPropertySection />
      <AboutUsSection />
      <CounterSection />
      <ClientLogoSection />
      <PricingSection />
      <TestimonialSection />
      <BlogSection />
    </>
  );
}
