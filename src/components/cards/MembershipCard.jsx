import { motion } from "framer-motion";
import { Check, Crown } from "lucide-react";

const MembershipCard = ({ plan, billing }) => {
  const yearlyPrice = Math.floor(plan.price * 12 * 0.8);
  const displayPrice = billing === "monthly" ? plan.price : yearlyPrice;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.5,
      }}
      whileHover={{
        y: -12,
        scale: 1.02,
      }}
      className={`
        relative
        overflow-hidden
        rounded-4xl
        border
        backdrop-blur-xl
        p-8
        transition-all
        duration-300
        glass-card

        ${
          plan.popular
            ? `
              border-[#00E676]/40
              bg-[#00E676]/10
              shadow-[0_0_40px_rgba(0,230,118,.18)]
            `
            : `
              border-[var(--border-glass)]
              bg-[var(--bg-glass)]
            `
        }
      `}
    >
      {/* Most Popular */}
      {plan.popular && (
        <div
          className="
            absolute
            right-5
            top-5
            flex
            items-center
            gap-2
            rounded-full
            bg-[#00E676]
            px-4
            py-2
            text-sm
            font-semibold
            text-black
          "
        >
          <Crown size={16} />
          Most Popular
        </div>
      )}

      {/* Plan */}
      <h3 className="text-3xl font-bold text-[var(--text-primary)]">
        {plan.name}
      </h3>

      {/* Price */}
      <div className="mt-6">
        <motion.span
          key={displayPrice}
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="text-6xl font-black text-[var(--text-primary)]"
        >
          ${displayPrice}
        </motion.span>

        <span className="ml-2 text-[var(--text-secondary)]">
          /{billing === "monthly" ? "month" : "year"}
        </span>
      </div>

      {billing === "yearly" && (
        <div
          className="
            mt-4
            inline-flex
            rounded-full
            bg-green-500/10
            px-3
            py-1
            text-sm
            text-[#00E676]
          "
        >
          Save 20% Annually
        </div>
      )}

      {/* Features */}
      <div className="mt-10 space-y-4">
        {plan.features.map((feature) => (
          <div key={feature} className="flex items-center gap-3">
            <Check size={18} className="text-[#00E676]" />

            <span className="text-[var(--text-secondary)]">{feature}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <motion.button
        whileHover={{
          scale: 1.03,
        }}
        whileTap={{
          scale: 0.98,
        }}
        className={`
          mt-10
          w-full
          rounded-2xl
          py-4
          font-semibold
          transition-all
          duration-300

          ${
            plan.popular
              ? `
                bg-[#00E676]
                text-black
              `
              : `
                border
                border-[#00E676]/20
                bg-[#00E676]/10
                text-[#00E676]
              `
          }
        `}
      >
        Get Started
      </motion.button>

      {/* Glow */}
      <div
        className="
          absolute
          -right-20
          -top-20
          h-52
          w-52
          rounded-full
          bg-[#00E676]/10
          blur-3xl
        "
      />
    </motion.div>
  );
};

export default MembershipCard;
