import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

import Container from "../../ui/Container";

const PricingHero = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-20">
      {/* Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#00E676]/8 blur-[180px]" />
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative text-center"
        >
          <span
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#00E676]/30
              bg-[#00E676]/10
              px-4
              py-2
              text-sm
              text-[#00E676]
            "
          >
            <Sparkles size={14} />

            Membership Plans
          </span>

          <h1 className="mt-6 text-5xl font-black md:text-6xl">
            Choose Your{" "}
            <span className="text-[#00E676]">Perfect Plan</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-[var(--text-secondary)]">
            Flexible memberships tailored to your fitness journey. Start with a
            plan that fits your goals and upgrade anytime.
          </p>
        </motion.div>
      </Container>
    </section>
  );
};

export default PricingHero;
