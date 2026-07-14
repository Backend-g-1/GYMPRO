import InteractiveNetwork from "../../components/ui/InteractiveNetwork";

import HeroSection from "../../components/sections/home/HeroSection";
import StatsSection from "../../components/sections/home/StatsSection";
import FeaturedTrainersSection from "../../components/sections/home/FeaturedTrainersSection";
import MembershipPreviewSection from "../../components/sections/home/MembershipPreviewSection";
import TestimonialsSection from "../../components/sections/home/TestimonialsSection";
import TrustSection from "../../components/sections/home/TrustSection";
import CTASection from "../../components/sections/home/CTASection";
import Seo from "../../components/ui/Seo";

const HomePage = () => {
  return (
    <div className="relative">
      <Seo title="Home" />
      <InteractiveNetwork />

      <div className="relative z-10">
        <HeroSection />
        <StatsSection />
        <FeaturedTrainersSection />
        <MembershipPreviewSection />
        <TestimonialsSection />
        <TrustSection />
        <CTASection />
      </div>
    </div>
  );
};

export default HomePage;
