import HeroSection from "../../components/sections/home/HeroSection";
import StatsSection from "../../components/sections/home/StatsSection";
import FeaturedTrainersSection from "../../components/sections/home/FeaturedTrainersSection";
import MembershipPreviewSection from "../../components/sections/home/MembershipPreviewSection";
import TestimonialsSection from "../../components/sections/home/TestimonialsSection";
import TrustSection from "../../components/sections/home/TrustSection";
import CTASection from "../../components/sections/home/CTASection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeaturedTrainersSection />
      <MembershipPreviewSection />
      <TestimonialsSection />
      <TrustSection />
      <CTASection />
    </>
  );
};

export default HomePage;
