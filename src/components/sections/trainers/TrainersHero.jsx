import { motion } from "framer-motion";

import Container from "../../ui/Container";

const TrainersHero = () => {
  return (
    <section className="relative py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
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
            Elite Coaches
          </span>

          <h1 className="mt-6 text-5xl font-black">Meet Our Trainers</h1>

          <p className="mx-auto mt-5 max-w-2xl text-[var(--text-secondary)]">
            Certified professionals ready to help you reach your fitness goals.
          </p>
        </motion.div>
      </Container>
    </section>
  );
};

export default TrainersHero;
