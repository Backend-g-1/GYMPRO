import { motion } from "framer-motion";
import { CalendarX } from "lucide-react";

const ClassesEmpty = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="py-20 text-center"
  >
    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl border border-[var(--border-glass)] bg-[var(--bg-glass)]">
      <CalendarX size={36} className="text-[var(--text-tertiary)]" />
    </div>

    <h3 className="text-3xl font-bold text-[var(--text-primary)]">
      No Classes Found
    </h3>

    <p className="mt-4 text-[var(--text-secondary)]">
      Try adjusting your filters or search term.
    </p>
  </motion.div>
);

export default ClassesEmpty;
