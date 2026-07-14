import { motion } from "framer-motion";

import PricingHero from "../../components/sections/memberships/PricingHero";
import PricingPlans from "../../components/sections/memberships/PricingPlans";
import FeaturesTable from "../../components/sections/memberships/FeaturesTable";
import TrustBadges from "../../components/sections/memberships/TrustBadges";
import MembershipFAQ from "../../components/sections/memberships/MembershipFAQ";
import MembershipCTA from "../../components/sections/memberships/MembershipCTA";
import Seo from "../../components/ui/Seo";

const MembershipsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Seo title="Memberships" />
      <PricingHero />

      <PricingPlans />

      <FeaturesTable />

      <TrustBadges />

      <MembershipFAQ />

      <MembershipCTA />
    </motion.div>
  );
};

export default MembershipsPage;
