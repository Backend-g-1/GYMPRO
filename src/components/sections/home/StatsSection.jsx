import { motion } from "framer-motion";
import Container from "../../ui/Container";
import AnimatedCounter from "../../ui/AnimatedCounter";

const stats = [
  {
    number: 5000,
    suffix: "+",
    title: "Members",
  },
  {
    number: 50,
    suffix: "+",
    title: "Trainers",
  },
  {
    number: 20,
    suffix: "+",
    title: "Programs",
  },
  {
    number: 15,
    suffix: "+",
    title: "Years Experience",
  },
];

const StatsSection = () => {
  return (
    <section className="pb-24">
      <Container>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                y: 30,
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
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="
                group
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-8
                text-center
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-[#00E676]/30
                hover:shadow-[0_0_30px_rgba(0,230,118,.15)]
              "
            >
              <h3 className="text-5xl font-black text-[#00E676]">
                <AnimatedCounter
                  end={item.number}
                  suffix={item.suffix}
                  duration={2000}
                />
              </h3>

              <p className="mt-3 text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default StatsSection;
