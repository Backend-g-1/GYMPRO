import Container from "../../ui/Container";
import SectionTitle from "../../ui/SectionTitle";

import MembershipCard from "../../cards/MembershipCard";

import { memberships } from "../../../data/memberships";

import { useState } from "react";

const MembershipPreviewSection = () => {
  const [billing, setBilling] = useState("monthly");

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#00E676]/5 blur-[180px]" />

        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#00E676]/5 blur-[180px]" />
      </div>

      <Container className="relative z-10">
        <SectionTitle
          badge="Membership Plans"
          title="Choose Your Fitness Journey"
          description="Flexible membership plans designed for every fitness level and goal."
        />

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

                ${billing === "monthly" ? "bg-[#00E676] text-black" : "text-[var(--text-secondary)]"}
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

                ${billing === "yearly" ? "bg-[#00E676] text-black" : "text-[var(--text-secondary)]"}
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
          py-1
          text-[10px]
          text-white
        "
              >
                Save 20%
              </span>
            </button>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 lg:items-stretch">
          {memberships.map((plan) => (
            <MembershipCard key={plan.id} plan={plan} billing={billing} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default MembershipPreviewSection;
