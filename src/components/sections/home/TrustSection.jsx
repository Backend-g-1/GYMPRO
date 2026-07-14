import { motion } from "framer-motion";

import Container from "../../ui/Container";
import SectionTitle from "../../ui/SectionTitle";
import AnimatedCounter from "../../ui/AnimatedCounter";

import { trustMetrics } from "../../../data/trustMetrics";

const TrustSection = () => {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            left-0
            top-0
            h-100
            w-100
            rounded-full
            bg-[#00E676]/10
            blur-[180px]
          "
        />

        <div
          className="
            absolute
            right-0
            bottom-0
            h-100
            w-100
            rounded-full
            bg-[#00E676]/10
            blur-[180px]
          "
        />
      </div>

      <Container>
        <SectionTitle
          badge="Why Choose Us"
          title="Trusted By Thousands Of Athletes"
          description="Our commitment to excellence has helped thousands achieve their fitness goals."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {trustMetrics.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
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
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-4xl
                  border
                  border-[var(--border-glass)]
                  bg-[var(--bg-glass)]
                  p-8
                  text-center
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:border-[#00E676]/30
                  hover:shadow-[0_0_40px_rgba(0,230,118,.15)]
                  glass-card
                "
              >
                {/* Neon Icon */}
                <div
                  className="
                    mx-auto
                    mb-6
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-[#00E676]/20
                    bg-[#00E676]/10
                    text-[#00E676]
                    backdrop-blur-xl
                  "
                >
                  <Icon size={30} />
                </div>

                {/* Counter */}
                <h3 className="text-5xl font-black text-[#00E676]">
                  <AnimatedCounter
                    end={Number(item.number)}
                    suffix={item.suffix}
                  />
                </h3>

                {/* Description */}
                <p className="mt-4 text-[var(--text-secondary)]">{item.title}</p>

                {/* Glow Effect */}
                <div
                  className="
                    absolute
                    -right-20
                    -top-20
                    h-40
                    w-40
                    rounded-full
                    bg-[#00E676]/10
                    blur-3xl
                    opacity-0
                    transition-all
                    duration-500
                    group-hover:opacity-100
                  "
                />
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default TrustSection;
