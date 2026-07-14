import { motion } from "framer-motion";
import { Dumbbell, Users, TrendingUp } from "lucide-react";

import Container from "../../ui/Container";
import Button from "../../ui/Button";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-[#00E676]/10 blur-[200px]" />
      </div>

      {/* Grid Pattern */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          bg-size-[40px_40px]
        "
      />

      <Container>
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            relative
            overflow-hidden
            rounded-[40px]
            border
            border-[var(--border-glass)]
            bg-[var(--bg-glass)]
            p-12
            text-center
            backdrop-blur-xl
            transition-all
            duration-500
            glass-card

            before:absolute
            before:inset-0
            before:rounded-[40px]
            before:border
            before:border-[#00E676]/10
            before:content-['']

            lg:p-20
          "
        >
          {/* Corner Glow */}
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#00E676]/10 blur-[120px]" />

          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#00E676]/10 blur-[120px]" />

          {/* Floating Dumbbell */}
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="
              absolute
              right-10
              top-10
              hidden
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              border
              border-[var(--border-glass)]
              bg-[var(--bg-glass)]
              backdrop-blur-xl
              lg:flex
            "
          >
            <Dumbbell size={28} className="text-[#00E676]" />
          </motion.div>

          {/* Content */}
          <div className="relative z-10">
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
              Start Your Journey Today
            </span>

            {/* Active Members Badge */}
            <div className="mb-6 mt-8 flex justify-center">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  px-4
                  py-2
                  backdrop-blur-xl
                "
              >
                <Users size={16} className="text-[#00E676]" />

                <span className="text-sm text-[var(--text-secondary)]">
                  5000+ Active Members
                </span>
              </motion.div>
            </div>

            <h2 className="mx-auto max-w-4xl text-4xl font-black leading-tight md:text-6xl">
              Ready To Transform
              <span className="text-[#00E676]"> Your Body</span>?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--text-secondary)]">
              Join thousands of athletes already training with our world-class
              coaches, premium facilities, and proven fitness programs.
            </p>

            {/* Success Rate Badge */}
            <div className="mt-8 flex justify-center">
              <div
                className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#00E676]/20
                  bg-[#00E676]/10
                  px-5
                  py-2
                  text-[#00E676]
                "
              >
                <TrendingUp size={18} />

                <span>98% Success Rate</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap justify-center gap-5">
              <Button>Start Training</Button>

              <Button variant="secondary">View Memberships</Button>
            </div>
          </div>

          {/* Particle Glow */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-80
              w-80
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#00E676]/5
              blur-[120px]
            "
          />
        </motion.div>
      </Container>
    </section>
  );
};

export default CTASection;
