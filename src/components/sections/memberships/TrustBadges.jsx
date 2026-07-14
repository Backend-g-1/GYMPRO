import { motion } from "framer-motion";
import { Shield, Lock, CreditCard, BadgeCheck } from "lucide-react";

import Container from "../../ui/Container";

const BADGES = [
  {
    icon: Lock,
    label: "Secure Payment",
    desc: "256-bit SSL encryption",
  },
  {
    icon: CreditCard,
    label: "Multiple Methods",
    desc: "Visa, MC, PayPal, UZK",
  },
  {
    icon: Shield,
    label: "Money Back",
    desc: "7-day satisfaction guarantee",
  },
  {
    icon: BadgeCheck,
    label: "Verified Trust",
    desc: "Trusted by 5000+ members",
  },
];

const PARTNERS = ["Visa", "Mastercard", "PayPal", "UzCard", "Apple Pay", "Google Pay"];

const TrustBadges = () => {
  return (
    <section className="py-16">
      <Container>
        {/* Badge row */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {BADGES.map(({ icon: Icon, label, desc }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-4 rounded-2xl border border-[var(--border-glass)] bg-[var(--bg-glass)] p-5 backdrop-blur-xl"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#00E676]/10 text-[#00E676]">
                <Icon size={22} />
              </div>

              <div>
                <p className="text-sm font-semibold text-[var(--text-primary)]">
                  {label}
                </p>

                <p className="text-xs text-[var(--text-tertiary)]">
                  {desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partners */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="mb-5 text-xs font-medium uppercase tracking-[3px] text-[var(--text-tertiary)]">
            Accepted Payment Methods
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {PARTNERS.map((name) => (
              <span
                key={name}
                className="text-sm font-semibold text-[var(--text-secondary)]"
              >
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default TrustBadges;
