import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";

import Container from "../../ui/Container";

const ClassesHero = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-16">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#00E676]/8 blur-[180px]" />
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#00E676]/30 bg-[#00E676]/10 px-4 py-2 text-sm text-[#00E676]">
            <CalendarDays size={14} />
            Class Schedule
          </span>

          <h1 className="mt-6 text-5xl font-black md:text-6xl">
            Find Your{" "}
            <span className="text-[#00E676]">Perfect Class</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-[var(--text-secondary)]">
            From yoga to HIIT, our expert instructors lead classes for every
            fitness level. Book your spot today.
          </p>
        </motion.div>
      </Container>
    </section>
  );
};

export default ClassesHero;
