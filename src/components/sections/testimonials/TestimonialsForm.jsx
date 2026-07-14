import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Send, CheckCircle2 } from "lucide-react";

const TestimonialsForm = () => {
  const [form, setForm] = useState({
    name: "",
    review: "",
    rating: 0,
  });
  const [hoveredStar, setHoveredStar] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!form.name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (form.rating === 0) {
      setError("Please select a rating.");
      return;
    }
    if (!form.review.trim() || form.review.trim().length < 10) {
      setError("Please write a review (at least 10 characters).");
      return;
    }

    setSubmitted(true);
  };

  const resetForm = () => {
    setForm({ name: "", review: "", rating: 0 });
    setSubmitted(false);
    setError("");
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-3xl border border-[var(--border-glass)] bg-[var(--bg-glass)] p-8 text-center backdrop-blur-xl glass-card sm:p-12"
      >
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#00E676]/20">
          <CheckCircle2 size={32} className="text-[#00E676]" />
        </div>

        <h3 className="text-2xl font-bold text-[var(--text-primary)]">
          Thank You!
        </h3>

        <p className="mt-3 text-[var(--text-secondary)]">
          Your review has been submitted and will appear after moderation.
          Your feedback helps us improve!
        </p>

        <button
          onClick={resetForm}
          className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-[#00E676] px-8 py-3 font-semibold text-black transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,230,118,.35)]"
        >
          Write Another Review
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-3xl border border-[var(--border-glass)] bg-[var(--bg-glass)] p-6 backdrop-blur-xl glass-card sm:p-8"
    >
      <h3 className="text-xl font-bold text-[var(--text-primary)]">
        Share Your Experience
      </h3>

      <p className="mt-2 text-sm text-[var(--text-secondary)]">
        Tell us about your journey at GYMPRO. Your story could inspire others!
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        {/* Name */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[var(--text-primary)]">
            Your Name
          </label>

          <input
            type="text"
            placeholder="Enter your name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full rounded-2xl border border-[var(--border-glass)] bg-[var(--bg-primary)] px-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-tertiary)] outline-none transition-all duration-200 focus:border-[#00E676]/50"
          />
        </div>

        {/* Rating */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[var(--text-primary)]">
            Rating
          </label>

          <div className="flex gap-1.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setForm({ ...form, rating: star })}
                onMouseEnter={() => setHoveredStar(star)}
                onMouseLeave={() => setHoveredStar(0)}
                className="transition-transform duration-150 hover:scale-110"
              >
                <Star
                  size={28}
                  className={
                    star <= (hoveredStar || form.rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-[var(--text-tertiary)]"
                  }
                />
              </button>
            ))}
          </div>
        </div>

        {/* Review */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[var(--text-primary)]">
            Your Review
          </label>

          <textarea
            rows={4}
            placeholder="Share your experience at GYMPRO..."
            value={form.review}
            onChange={(e) => setForm({ ...form, review: e.target.value })}
            className="w-full resize-none rounded-2xl border border-[var(--border-glass)] bg-[var(--bg-primary)] px-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-tertiary)] outline-none transition-all duration-200 focus:border-[#00E676]/50"
          />
        </div>

        {/* Error */}
        <AnimatePresence>
          {error && (
            <motion.p
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="text-sm text-red-400"
            >
              {error}
            </motion.p>
          )}
        </AnimatePresence>

        {/* Submit */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#00E676] py-3.5 font-semibold text-black transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,230,118,.3)]"
        >
          <Send size={18} />
          Submit Review
        </motion.button>
      </form>
    </motion.div>
  );
};

export default TestimonialsForm;
