import { motion } from "framer-motion";

import Container from "../../ui/Container";

const TrainerProfileHero = ({ trainer }) => {
  return (
    <section className="py-20 pt-32">
      <Container>
        <div
          className="
            grid
            gap-10
            lg:grid-cols-2
            items-center
          "
        >
          {/* Image */}

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            <img
              src={trainer.image}
              alt={trainer.name}
              loading="lazy"
              className="
                w-full
                h-125
                object-cover
                rounded-3xl
              "
            />
          </motion.div>

          {/* Content */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="space-y-6"
          >
            <span
              className="
                inline-block
                rounded-full
                bg-purple-500/20
                px-4
                py-2
                text-purple-400
              "
            >
              {trainer.specialty}
            </span>

            <h1
              className="
                text-5xl
                font-bold
                text-white
              "
            >
              {trainer.name}
            </h1>

            <div
              className="
                flex
                gap-6
                text-gray-300
              "
            >
              <p>⭐ {trainer.rating}</p>

              <p>🏋 {trainer.experience}</p>
            </div>

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
                rounded-2xl
                bg-purple-600
                px-8
                py-4
                text-white
                font-semibold
                hover:bg-purple-700
                transition
              "
            >
              Book Session
            </motion.button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default TrainerProfileHero;
