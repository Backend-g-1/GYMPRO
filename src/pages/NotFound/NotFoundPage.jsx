import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Dumbbell, ArrowLeft } from "lucide-react";
import Seo from "../../components/ui/Seo";

const NotFoundPage = () => {
  return (
    <section className="flex min-h-screen items-center justify-center px-4">
      <Seo title="404 — Page Not Found" />
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Animated 404 */}
          <div className="relative mx-auto mb-8 flex h-32 w-32 items-center justify-center">
            <motion.div
              animate={{ rotate: [0, 10, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex h-32 w-32 items-center justify-center rounded-4xl border border-[var(--border-glass)] bg-[var(--bg-glass)]"
            >
              <Dumbbell size={56} className="text-[#00E676]" />
            </motion.div>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-8xl font-bold text-[var(--text-primary)]"
          >
            404
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mt-4 text-xl text-[var(--text-secondary)]"
          >
            Oops! This page must have skipped leg day.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-2 text-sm text-[var(--text-tertiary)]"
          >
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-10"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-2xl bg-[#00E676] px-8 py-4 font-semibold text-black transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,230,118,.35)]"
            >
              <ArrowLeft size={18} />
              Back to Home
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default NotFoundPage;
