import { motion } from "framer-motion";

import Container from "../../ui/Container";

const TrainerBooking = ({ trainer }) => {
  return (
    <section className="py-16">
      <Container>
        <motion.div
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="
            rounded-3xl
            border
            border-white/10
            bg-linear-to-r
            from-purple-500/20
            to-white/5
            p-8
            lg:p-12
            transition-all
            duration-300
            hover:border-purple-500/40
            hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]
          "
        >
          <div
            className="
              flex
              flex-col
              gap-8
              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
            {/* Content */}

            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: 0.2,
              }}
            >
              <h2
                className="
                  text-3xl
                  font-bold
                  text-white
                  lg:text-4xl
                "
              >
                Train with {trainer.name}
              </h2>

              <p
                className="
                  mt-4
                  max-w-xl
                  text-gray-300
                  leading-7
                "
              >
                Start your fitness journey with a professional coach and get a
                personalized training experience.
              </p>
            </motion.div>

            {/* Button */}

            <motion.button
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{
                scale: 0.95,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
              className="
                rounded-2xl
                bg-purple-600
                px-8
                py-4
                font-semibold
                text-white
                transition
                hover:bg-purple-700
              "
            >
              Book Session
            </motion.button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default TrainerBooking;
