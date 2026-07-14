import { useMemo } from "react";
import { motion } from "framer-motion";
import { Star, Users, MessageSquare, TrendingUp } from "lucide-react";

const TestimonialsStats = ({ testimonials }) => {
  const stats = useMemo(() => {
    const total = testimonials.length;
    const avgRating =
      total > 0
        ? testimonials.reduce((sum, t) => sum + t.rating, 0) / total
        : 0;

    const distribution = [0, 0, 0, 0, 0];
    testimonials.forEach((t) => {
      if (t.rating >= 1 && t.rating <= 5) {
        distribution[t.rating - 1]++;
      }
    });

    const recommendationRate =
      total > 0
        ? Math.round(
            (testimonials.filter((t) => t.rating >= 4).length / total) * 100
          )
        : 0;

    return { total, avgRating, distribution, recommendationRate };
  }, [testimonials]);

  const statCards = [
    {
      label: "Average Rating",
      value: stats.avgRating.toFixed(1),
      icon: Star,
      suffix: `/ 5.0`,
      color: "text-yellow-400",
    },
    {
      label: "Total Reviews",
      value: stats.total,
      icon: MessageSquare,
      suffix: "",
      color: "text-[#00E676]",
    },
    {
      label: "Recommend Rate",
      value: `${stats.recommendationRate}%`,
      icon: TrendingUp,
      suffix: "",
      color: "text-purple-400",
    },
    {
      label: "Active Members",
      value: "2.4K",
      icon: Users,
      suffix: "+",
      color: "text-blue-400",
    },
  ];

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {statCards.map((s) => (
            <motion.div
              key={s.label}
              variants={itemAnim}
              className="rounded-3xl border border-[var(--border-glass)] bg-[var(--bg-glass)] p-6 text-center backdrop-blur-xl glass-card"
            >
              <s.icon
                size={24}
                className={`mx-auto ${s.color}`}
              />
              <p className="mt-3 text-3xl font-bold text-[var(--text-primary)]">
                {s.value}
                {s.suffix && (
                  <span className="text-sm font-normal text-[var(--text-tertiary)]">
                    {s.suffix}
                  </span>
                )}
              </p>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">
                {s.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Rating Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 rounded-3xl border border-[var(--border-glass)] bg-[var(--bg-glass)] p-6 backdrop-blur-xl glass-card sm:p-8"
        >
          <h3 className="text-lg font-semibold text-[var(--text-primary)]">
            Rating Distribution
          </h3>

          <div className="mt-6 space-y-3">
            {[5, 4, 3, 2, 1].map((star) => {
              const count = stats.distribution[star - 1];
              const maxCount = Math.max(...stats.distribution, 1);
              const width = (count / maxCount) * 100;

              return (
                <div key={star} className="flex items-center gap-3">
                  <span className="w-8 text-right text-sm font-medium text-[var(--text-secondary)]">
                    {star}
                  </span>

                  <Star
                    size={14}
                    className="shrink-0 fill-yellow-400 text-yellow-400"
                  />

                  <div className="flex-1 overflow-hidden rounded-full bg-[var(--bg-glass)]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${width}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.1 * (5 - star) }}
                      className="h-2.5 rounded-full bg-yellow-400"
                    />
                  </div>

                  <span className="w-10 text-right text-sm text-[var(--text-tertiary)]">
                    {count}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsStats;
