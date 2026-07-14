import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const ContactHero = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-20">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-[#00E676]/10 blur-[180px]" />
        <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-purple-500/10 blur-[180px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-3xl border border-[var(--border-glass)] bg-[var(--bg-glass)] backdrop-blur-xl">
            <MessageCircle size={32} className="text-[#00E676]" />
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-[var(--text-primary)] md:text-5xl lg:text-6xl">
            Get in{" "}
            <span className="text-[#00E676]">Touch</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text-secondary)]">
            Have a question, feedback, or want to start your fitness journey?
            We&apos;d love to hear from you. Reach out and our team will get back to you
            within 24 hours.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;
