import { motion } from "framer-motion";
import { Star, Quote, CalendarDays, Award } from "lucide-react";

const TestimonialCard = ({ item }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="
        relative
        flex
        min-h-[280px]
        flex-col
        rounded-4xl
        border
        border-[var(--border-glass)]
        bg-[var(--bg-glass)]
        p-6
        backdrop-blur-xl
        sm:p-8
        glass-card
      "
    >
      <Quote
        size={36}
        className="
          absolute
          right-6
          top-6
          text-[#00E676]/30
        "
      />

      <div className="flex items-center gap-4">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="
            h-14
            w-14
            rounded-full
            object-cover
            sm:h-16
            sm:w-16
          "
        />

        <div>
          <h4 className="font-semibold text-[var(--text-primary)]">
            {item.name}
          </h4>

          <p className="text-sm text-[var(--text-secondary)]">
            {item.role}
          </p>
        </div>
      </div>

      <div className="mt-5 flex gap-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={16}
            className={
              index < item.rating
                ? "fill-yellow-400 text-yellow-400"
                : "text-[var(--text-tertiary)]"
            }
          />
        ))}
      </div>

      <p className="mt-4 flex-1 leading-relaxed text-[var(--text-secondary)]">
        {item.review}
      </p>

      {/* Achievement */}
      {item.achievement && (
        <div className="mt-4 flex items-center gap-2 rounded-xl bg-[#00E676]/10 px-3 py-2 text-xs font-medium text-[#00E676]">
          <Award size={14} />
          {item.achievement}
        </div>
      )}

      {/* Date */}
      {item.date && (
        <div className="mt-3 flex items-center gap-1.5 text-xs text-[var(--text-tertiary)]">
          <CalendarDays size={12} />
          {formatDate(item.date)}
        </div>
      )}
    </motion.div>
  );
};

export default TestimonialCard;
