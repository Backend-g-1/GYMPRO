import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

import { trainers } from "../../data/trainers";

import TrainerProfileHero from "../../components/sections/trainer-details/TrainerProfileHero";
import TrainerStats from "../../components/sections/trainer-details/TrainerStats";
import TrainerAbout from "../../components/sections/trainer-details/TrainerAbout";
import TrainerPrograms from "../../components/sections/trainer-details/TrainerPrograms";
import TrainerBooking from "../../components/sections/trainer-details/TrainerBooking";

const TrainerDetailsPage = () => {
  const { id } = useParams();

  const trainer = trainers.find((item) => item.id === Number(id));

  if (!trainer) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold text-white">Trainer not found</h1>
      </section>
    );
  }

  return (
    <motion.main
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      <TrainerProfileHero trainer={trainer} />

      <TrainerStats trainer={trainer} />

      <TrainerAbout trainer={trainer} />

      <TrainerPrograms trainer={trainer} />

      <TrainerBooking trainer={trainer} />
    </motion.main>
  );
};

export default TrainerDetailsPage;
