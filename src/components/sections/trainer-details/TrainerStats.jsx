import { motion } from "framer-motion";

import Container from "../../ui/Container";

const TrainerStats = ({ trainer }) => {
  const stats = [
    {
      value: `${trainer.clients}+`,
      label: "Clients",
    },

    {
      value: trainer.experience,
      label: "Experience",
    },

    {
      value: trainer.rating,
      label: "Rating",
    },

    {
      value: `${trainer.programs.length}+`,
      label: "Programs",
    },
  ];

  const containerVariants = {
    hidden: {},

    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-10">
      <Container>
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
            grid-cols-2
            lg:grid-cols-4
            gap-5
          "
        >
          {stats.map((item) => (
            <motion.div
              key={item.label}
              variants={cardVariants}
              whileHover={{
                y: -8,
              }}
              className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  p-6
                  text-center
                  backdrop-blur
                "
            >
              <h3
                className="
                    text-3xl
                    font-bold
                    text-white
                  "
              >
                {item.value}
              </h3>

              <p
                className="
                    mt-2
                    text-gray-400
                  "
              >
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default TrainerStats;
