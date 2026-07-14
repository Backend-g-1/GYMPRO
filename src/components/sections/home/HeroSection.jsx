import { motion } from "framer-motion";
import Container from "../../ui/Container";
import Button from "../../ui/Button";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background Mesh Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[10%] top-[15%] h-72 w-72 rounded-full bg-green-500/15 blur-[120px]" />

        <div className="absolute right-[10%] top-[20%] h-96 w-96 rounded-full bg-emerald-400/10 blur-[160px]" />

        <div className="absolute bottom-0 left-1/2 h-125 w-125 -translate-x-1/2 rounded-full bg-green-500/10 blur-[180px]" />
      </div>

      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <span className="inline-flex rounded-full border border-[#00E676]/30 bg-[#00E676]/10 px-4 py-2 text-sm text-[#00E676]">
              Premium Fitness Experience
            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">
              Transform
              <span className="text-[#00E676]"> Your Body</span>
              <br />
              Transform Your Life
            </h1>

            <p className="mt-6 max-w-xl text-lg text-[var(--text-secondary)]">
              Train with elite coaches, personalized programs, and premium
              facilities designed to unlock your full potential.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button>Start Training</Button>

              <Button variant="secondary">View Memberships</Button>
            </div>

            {/* Trusted By */}
            <div className="mt-16">
              <p className="mb-5 text-sm uppercase tracking-[4px] text-[var(--text-tertiary)]">
                Trusted By Athletes
              </p>

              <div className="flex flex-wrap gap-8 text-[var(--text-tertiary)] md:gap-10">
                <span>Nike</span>
                <span>Gymshark</span>
                <span>Technogym</span>
                <span>Adidas</span>
              </div>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61"
              alt="Athlete"
              className="w-full rounded-[40px] object-cover"
            />

            {/* Active Members */}
            <div className="absolute -left-10 top-10 hidden md:block">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <p className="text-sm text-gray-400">Active Members</p>

                <h3 className="text-3xl font-bold">5000+</h3>
              </div>
            </div>

            {/* Trainers */}
            <div className="absolute -right-10 bottom-10 hidden md:block">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <p className="text-sm text-gray-400">Trainers</p>

                <h3 className="text-3xl font-bold">50+</h3>
              </div>
            </div>

            {/* Success Rate */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute -right-7.5 top-20 hidden lg:block"
            >
              <div className="rounded-3xl border border-white/10 bg-black/40 p-4 backdrop-blur-xl">
                <p className="text-xs text-gray-400">Success Rate</p>

                <h4 className="text-2xl font-bold text-[#00E676]">98%</h4>
              </div>
            </motion.div>

            {/* Calories Burned */}
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute bottom-20 -left-10 hidden lg:block"
            >
              <div className="rounded-3xl border border-white/10 bg-black/40 p-4 backdrop-blur-xl">
                <p className="text-xs text-gray-400">Calories Burned</p>

                <h4 className="text-2xl font-bold">15K+</h4>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-12 w-7 justify-center rounded-full border border-white/20">
          <div className="mt-2 h-2 w-2 rounded-full bg-[#00E676]" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
