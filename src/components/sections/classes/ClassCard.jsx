import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, Users, Calendar, ChevronRight } from "lucide-react";

const levelColors = {
  Beginner: "bg-green-500/10 text-green-400",
  Intermediate: "bg-yellow-500/10 text-yellow-400",
  Advanced: "bg-red-500/10 text-red-400",
  "All Levels": "bg-blue-500/10 text-blue-400",
};

const ClassCard = ({ item }) => {
  const spotsLeft = item.spots - item.enrolled;

  return (
    <Link to={`/classes/${item.id}`} className="block">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -8 }}
        className="group overflow-hidden rounded-3xl border border-[var(--border-glass)] bg-[var(--bg-glass)] backdrop-blur-xl glass-card"
      >
        {/* Image */}
        <div className="relative h-48 overflow-hidden sm:h-56">
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

          {/* Category badge */}
          <div className="absolute left-3 top-3">
            <span className="rounded-full bg-[#00E676]/20 px-3 py-1 text-xs font-medium text-[#00E676] backdrop-blur-xl">
              {item.category}
            </span>
          </div>

          {/* Level badge */}
          <div className="absolute right-3 top-3">
            <span
              className={`rounded-full px-3 py-1 text-xs font-medium backdrop-blur-xl ${
                levelColors[item.level] || "bg-white/10 text-gray-300"
              }`}
            >
              {item.level}
            </span>
          </div>

          {/* Bottom overlay content */}
          <div className="absolute bottom-0 left-0 w-full p-4">
            <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-[#00E676]">
              {item.name}
            </h3>
            <p className="mt-1 text-sm text-gray-300">{item.instructor}</p>
          </div>
        </div>

        {/* Info row */}
        <div className="space-y-3 p-4">
          <div className="flex flex-wrap items-center gap-4 text-xs text-[var(--text-secondary)]">
            <span className="flex items-center gap-1.5">
              <Clock size={13} />
              {item.duration}
            </span>

            <span className="flex items-center gap-1.5">
              <Users size={13} />
              {spotsLeft > 0 ? `${spotsLeft} spots left` : "Full"}
            </span>

            <span className="flex items-center gap-1.5">
              <Calendar size={13} />
              {item.schedule.length}×/week
            </span>
          </div>

          {/* Schedule preview */}
          <div className="flex flex-wrap gap-1.5">
            {item.schedule.map((s) => (
              <span
                key={s.day}
                className="rounded-lg border border-[var(--border-glass)] bg-[var(--bg-glass)] px-2.5 py-1 text-[11px] text-[var(--text-tertiary)]"
              >
                {s.day.slice(0, 3)} {s.time}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-1">
            <span className="text-xs font-medium text-[#00E676]">{item.price}</span>

            <span className="flex items-center gap-1 text-xs font-medium text-[var(--text-tertiary)] transition-all duration-200 group-hover:gap-2 group-hover:text-[#00E676]">
              Details <ChevronRight size={14} />
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ClassCard;
