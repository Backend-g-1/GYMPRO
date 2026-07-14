import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, ArrowUpRight, Dumbbell } from "lucide-react";

const TrainerCard = ({ trainer }) => {
  return (
    <Link to={`/trainers/${trainer.id}`} className="block">
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
          amount: 0.2,
        }}
        transition={{
          duration: 0.6,
        }}
        whileHover={{
          y: -10,
        }}
        className="
          group
          relative
          overflow-hidden
          rounded-4xl
          border
          border-[var(--border-glass)]
          bg-[var(--bg-glass)]
          backdrop-blur-xl
          glass-card
        "
      >
        {/* Image */}
        <div className="relative h-105 overflow-hidden">
          <img
            src={trainer.image}
            alt={trainer.name}
            loading="lazy"
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-700
              group-hover:scale-110
            "
          />

          {/* Overlay */}
          <div
            className="
              absolute
              inset-0
              bg-linear-to-t
              from-black/90
              via-black/50
              to-transparent
            "
          />

          {/* Rating */}
          <div className="absolute right-4 top-4">
            <div
              className="
                flex
                items-center
                gap-1
                rounded-full
                border
                border-white/10
                bg-black/40
                px-3
                py-1
                backdrop-blur-xl
              "
            >
              <Star size={14} className="fill-yellow-400 text-yellow-400" />

              <span className="text-sm font-medium text-white">
                {trainer.rating}
              </span>
            </div>
          </div>

          {/* Verified Badge */}
          <div className="absolute right-4 top-16">
            <div
              className="
                rounded-full
                border
                border-[#00E676]/20
                bg-[#00E676]/10
                px-3
                py-1
                text-xs
                font-medium
                text-[#00E676]
                backdrop-blur-xl
              "
            >
              ✓ Verified Coach
            </div>
          </div>

          {/* Experience */}
          <div className="absolute left-4 top-4">
            <div
              className="
                rounded-full
                border
                border-[#00E676]/20
                bg-[#00E676]/10
                px-3
                py-1
                text-sm
                text-[#00E676]
                backdrop-blur-xl
              "
            >
              {trainer.experience}
            </div>
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 w-full p-6">
            {/* Specialty */}
            <div className="mb-3 flex items-center gap-2">
              <Dumbbell size={16} className="text-[#00E676]" />

              <span className="text-sm text-gray-300">
                {trainer.specialty}
              </span>
            </div>

            {/* Name */}
            <h3
              className="
                text-2xl
                font-bold
                text-white
                transition-colors
                duration-300
                group-hover:text-[#00E676]
              "
            >
              {trainer.name}
            </h3>

            {/* CTA */}
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="
                mt-5
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-[#00E676]
                px-5
                py-3
                font-semibold
                text-black
                transition-all
                duration-300
                hover:gap-3
                hover:shadow-[0_0_25px_rgba(0,230,118,.35)]
              "
            >
              View Profile
              <ArrowUpRight size={18} />
            </motion.span>
          </div>
        </div>

        {/* Glow */}
        <div
          className="
            absolute
            -right-20
            -top-20
            h-40
            w-40
            rounded-full
            bg-[#00E676]/10
            blur-3xl
            opacity-0
            transition-all
            duration-500
            group-hover:opacity-100
          "
        />
      </motion.div>
    </Link>
  );
};

export default TrainerCard;
