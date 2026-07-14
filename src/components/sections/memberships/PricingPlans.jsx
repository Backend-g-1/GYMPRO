import { useState } from "react";

import Container from "../../ui/Container";
import SectionTitle from "../../ui/SectionTitle";
import MembershipCard from "../../cards/MembershipCard";

import { memberships } from "../../../data/memberships";

const PricingPlans = () => {
  const [billing, setBilling] = useState("monthly");

  return (
    <section className="relative py-10">
      <Container>
        <SectionTitle
          badge="Pricing"
          title="Simple, Transparent Pricing"
          description="No hidden fees. Cancel anytime. All plans include full gym access."
        />

        {/* Billing Toggle */}
        <div className="mb-12 flex justify-center">
          <div
            className="
              flex
              items-center
              rounded-2xl
              border
              border-[var(--border-glass)]
              bg-[var(--bg-glass)]
              p-1
              backdrop-blur-xl
            "
          >
            <button
              onClick={() => setBilling("monthly")}
              className={`
                rounded-xl
                px-6
                py-3
                text-sm
                font-medium
                transition-all
                duration-200

                ${billing === "monthly" ? "bg-[#00E676] text-black shadow-lg shadow-[#00E676]/20" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"}
              `}
            >
              Monthly
            </button>

            <button
              onClick={() => setBilling("yearly")}
              className={`
                relative
                rounded-xl
                px-6
                py-3
                text-sm
                font-medium
                transition-all
                duration-200

                ${billing === "yearly" ? "bg-[#00E676] text-black shadow-lg shadow-[#00E676]/20" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"}
              `}
            >
              Yearly
              <span
                className="
                  absolute
                  -right-4
                  -top-3
                  rounded-full
                  bg-red-500
                  px-2
                  py-0.5
                  text-[10px]
                  font-bold
                  text-white
                "
              >
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid gap-8 lg:grid-cols-3 lg:items-stretch">
          {memberships.map((plan) => (
            <MembershipCard key={plan.id} plan={plan} billing={billing} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PricingPlans;
