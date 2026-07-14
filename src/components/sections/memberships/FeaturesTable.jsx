import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

import Container from "../../ui/Container";
import SectionTitle from "../../ui/SectionTitle";

import { memberships } from "../../../data/memberships";

/* ── All possible features grouped by category ── */
const FEATURE_ROWS = [
  {
    category: "Facility Access",
    items: [
      { label: "Gym Access", key: "Gym Access" },
      { label: "Full Gym Access", key: "Full Gym Access" },
      { label: "Unlimited Access", key: "Unlimited Access" },
      { label: "Locker Access", key: "Locker Access" },
    ],
  },
  {
    category: "Training",
    items: [
      { label: "Free Consultation", key: "1 Free Consultation" },
      { label: "Personal Trainer", key: "Personal Trainer" },
      { label: "Custom Workout Plan", key: "Custom Workout Plan" },
      { label: "Group Classes", key: "Group Classes" },
    ],
  },
  {
    category: "Nutrition & Support",
    items: [
      { label: "Nutrition Guide", key: "Nutrition Guide" },
      { label: "Nutrition Coaching", key: "Nutrition Coaching" },
      { label: "Basic Support", key: "Basic Support" },
      { label: "Priority Support", key: "Priority Support" },
      { label: "VIP Support", key: "VIP Support" },
      { label: "Premium Classes", key: "Premium Classes" },
    ],
  },
];

const hasFeature = (plan, key) => plan.features.includes(key);

const FeaturesTable = () => {
  return (
    <section className="relative py-24">
      {/* Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#00E676]/5 blur-[180px]" />
        <div className="absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#00E676]/5 blur-[180px]" />
      </div>

      <Container>
        <SectionTitle
          badge="Compare Plans"
          title="Find The Right Plan For You"
          description="See exactly what you get with each membership level."
        />

        {/* Desktop Table — hidden on mobile */}
        <div className="hidden overflow-hidden rounded-3xl border border-[var(--border-glass)] bg-[var(--bg-glass)] backdrop-blur-xl md:block">
          {/* Header Row */}
          <div className="grid grid-cols-[1fr_repeat(3,1fr)] border-b border-[var(--border-glass)]">
            <div className="p-5 font-semibold text-[var(--text-primary)]">Features</div>

            {memberships.map((plan) => (
              <div
                key={plan.id}
                className={`p-5 text-center font-semibold ${
                  plan.popular
                    ? "bg-[#00E676]/5 text-[#00E676]"
                    : "text-[var(--text-primary)]"
                }`}
              >
                {plan.name}

                {plan.popular && (
                  <span className="ml-2 text-xs text-[#00E676]">★</span>
                )}
              </div>
            ))}
          </div>

          {/* Feature Rows */}
          {FEATURE_ROWS.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.08 }}
            >
              {/* Category label */}
              <div className="border-b border-[var(--border-glass)] bg-[var(--bg-glass)] px-5 py-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)]">
                  {group.category}
                </span>
              </div>

              {group.items.map((feature, fi) => (
                <div
                  key={feature.key}
                  className={`grid grid-cols-[1fr_repeat(3,1fr)] border-b border-[var(--border-glass)] transition-colors hover:bg-[var(--bg-glass-hover)] ${
                    fi === group.items.length - 1 ? "border-b-0" : ""
                  }`}
                >
                  <div className="flex items-center px-5 py-4">
                    <span className="text-sm text-[var(--text-secondary)]">
                      {feature.label}
                    </span>
                  </div>

                  {memberships.map((plan) => {
                    const has = hasFeature(plan, feature.key);

                    return (
                      <div
                        key={plan.id}
                        className={`flex items-center justify-center py-4 ${
                          plan.popular ? "bg-[#00E676]/[0.02]" : ""
                        }`}
                      >
                        {has ? (
                          <Check
                            size={18}
                            className="text-[#00E676]"
                          />
                        ) : (
                          <X
                            size={16}
                            className="text-[var(--text-tertiary)]/40"
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Mobile Cards */}
        <div className="space-y-6 md:hidden">
          {memberships.map((plan) => (
            <div
              key={plan.id}
              className={`
                overflow-hidden rounded-3xl border backdrop-blur-xl

                ${
                  plan.popular
                    ? "border-[#00E676]/40 bg-[#00E676]/5"
                    : "border-[var(--border-glass)] bg-[var(--bg-glass)]"
                }
              `}
            >
              <div className="border-b border-[var(--border-glass)] p-5">
                <h3 className="text-xl font-bold text-[var(--text-primary)]">
                  {plan.name}
                </h3>

                <p className="text-sm text-[var(--text-secondary)]">
                  ${plan.price}/month
                </p>
              </div>

              <div className="space-y-1 p-5">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-center gap-3 py-2">
                    <Check size={16} className="shrink-0 text-[#00E676]" />

                    <span className="text-sm text-[var(--text-secondary)]">
                      {f}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturesTable;
