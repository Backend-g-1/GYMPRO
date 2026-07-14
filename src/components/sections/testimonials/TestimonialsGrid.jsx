import { motion } from "framer-motion";
import TestimonialCard from "../../cards/TestimonialCard";

const TestimonialsGrid = ({ testimonials }) => {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((item) => (
            <motion.div key={item.id} variants={itemAnim}>
              <TestimonialCard item={item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsGrid;
