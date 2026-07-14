import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, SearchX } from "lucide-react";

import { trainers } from "../../data/trainers";

import Breadcrumb from "../../components/ui/Breadcrumb";
import BackButton from "../../components/ui/BackButton";
import Container from "../../components/ui/Container";

import TrainerProfileHero from "../../components/sections/trainer-details/TrainerProfileHero";
import TrainerStats from "../../components/sections/trainer-details/TrainerStats";
import TrainerAbout from "../../components/sections/trainer-details/TrainerAbout";
import TrainerPrograms from "../../components/sections/trainer-details/TrainerPrograms";
import TrainerBooking from "../../components/sections/trainer-details/TrainerBooking";
import Seo from "../../components/ui/Seo";

const TrainerDetailsPage = () => {
  const { id } = useParams();

  const trainer = trainers.find((item) => item.id === Number(id));

  if (!trainer) {
    return (
      <section className="flex min-h-screen items-center justify-center">
        <Seo title="Trainer Details" />
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div
              className="
                mx-auto
                mb-8
                flex
                h-24
                w-24
                items-center
                justify-center
                rounded-4xl
                border
                border-[var(--border-glass)]
                bg-[var(--bg-glass)]
              "
            >
              <SearchX size={48} className="text-[var(--text-tertiary)]" />
            </div>

            <h1 className="text-4xl font-bold text-[var(--text-primary)]">
              Trainer Not Found
            </h1>

            <p className="mt-4 text-[var(--text-secondary)]">
              The trainer you're looking for doesn't exist or may have been removed.
            </p>

            <Link
              to="/trainers"
              className="
                mt-8
                inline-flex
                items-center
                gap-2
                rounded-2xl
                bg-[#00E676]
                px-8
                py-4
                font-semibold
                text-black
                transition-all
                duration-300
                hover:shadow-[0_0_25px_rgba(0,230,118,.35)]
              "
            >
              <ArrowLeft size={18} />

              Back to Trainers
            </Link>
          </motion.div>
        </Container>
      </section>
    );
  }

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Seo title="Trainer Details" />
      {/* Breadcrumb + BackButton */}
      <section className="pt-28 pb-4">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Breadcrumb
              items={[
                { label: "Trainers", to: "/trainers" },
                { label: trainer.name },
              ]}
            />

            <BackButton
              to="/trainers"
              label="Back to Trainers"
            />
          </div>
        </Container>
      </section>

      <TrainerProfileHero trainer={trainer} />

      <TrainerStats trainer={trainer} />

      <TrainerAbout trainer={trainer} />

      <TrainerPrograms trainer={trainer} />

      <TrainerBooking trainer={trainer} />
    </motion.main>
  );
};

export default TrainerDetailsPage;
