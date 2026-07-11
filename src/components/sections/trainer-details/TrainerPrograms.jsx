import { motion } from "framer-motion";

import Container from "../../ui/Container";

const TrainerPrograms = ({ trainer }) => {
  const containerVariants = {
    hidden: {},

    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-10">
      <Container>
        <h2
          className="
            mb-8
            text-3xl
            font-bold
            text-white
          "
        >
          Training Programs
        </h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          className="
            grid
            gap-5
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {trainer.programs.map((program, index) => (
            <motion.div
              key={program}
              variants={cardVariants}
              whileHover={{
                y: -10,
              }}
              className="
                  group
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  p-6
                  transition
                  duration-300
                  hover:border-purple-500/50
                "
            >
              <motion.div
                whileHover={{
                  rotate: 10,
                  scale: 1.1,
                }}
                className="
                    mb-5
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    bg-purple-500/20
                    text-xl
                    text-purple-400
                  "
              >
                {index + 1}
              </motion.div>

              <h3
                className="
                    text-xl
                    font-semibold
                    text-white
                  "
              >
                {program}
              </h3>

              <p
                className="
                    mt-3
                    text-sm
                    text-gray-400
                  "
              >
                Personalized training designed for your fitness goals.
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default TrainerPrograms;
