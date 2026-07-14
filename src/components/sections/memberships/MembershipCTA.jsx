import { motion } from "framer-motion";
import { ArrowRight, Shield, RefreshCw, Headphones } from "lucide-react";

import Container from "../../ui/Container";
import Button from "../../ui/Button";

const perks = [
  { icon: RefreshCw, label: "Cancel anytime" },
  { icon: Shield, label: "Secure payment" },
  { icon: Headphones, label: "24/7 support" },
];

const MembershipCTA = () => {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00E676]/10 blur-[200px]" />
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative text-center"
        >
          <span
            className="
              inline-flex
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
            Start Today
          </span>

          <h2 className="mt-6 text-4xl font-black md:text-5xl">
            Ready to{" "}
            <span className="text-[#00E676]">Transform</span>?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-lg text-[var(--text-secondary)]">
            Join thousands of members crushing their fitness goals. No
            commitment required — start with a free trial.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button className="inline-flex items-center gap-2">
              Join Now
              <ArrowRight size={18} />
            </Button>

            <Button variant="secondary">Try Free Trial</Button>
          </div>

          {/* Perks */}
          <div className="mt-12 flex flex-wrap justify-center gap-8">
            {perks.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                <Icon size={16} className="text-[#00E676]" />

                {label}
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default MembershipCTA;
