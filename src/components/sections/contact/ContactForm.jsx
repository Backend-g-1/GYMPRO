import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const ContactForm = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};

    if (!form.name.trim()) {
      errs.name = "Name is required.";
    } else if (form.name.trim().length < 2) {
      errs.name = "Name must be at least 2 characters.";
    }

    if (!form.email.trim()) {
      errs.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Please enter a valid email address.";
    }

    if (!form.subject.trim()) {
      errs.subject = "Subject is required.";
    }

    if (!form.message.trim()) {
      errs.message = "Message is required.";
    } else if (form.message.trim().length < 20) {
      errs.message = "Message must be at least 20 characters.";
    }

    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  const resetForm = () => {
    setForm(initialForm);
    setSubmitted(false);
    setErrors({});
  };

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    // Clear error on change
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
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
          Message Sent!
        </h3>

        <p className="mt-3 text-[var(--text-secondary)]">
          Thank you for reaching out! We&apos;ve received your message and will
          get back to you within 24 hours.
        </p>

        <button
          onClick={resetForm}
          className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-[#00E676] px-8 py-3 font-semibold text-black transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,230,118,.35)]"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  const fields = [
    { key: "name", label: "Your Name", type: "text", placeholder: "John Doe" },
    {
      key: "email",
      label: "Email Address",
      type: "email",
      placeholder: "john@example.com",
    },
    {
      key: "subject",
      label: "Subject",
      type: "text",
      placeholder: "How can we help you?",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-3xl border border-[var(--border-glass)] bg-[var(--bg-glass)] p-6 backdrop-blur-xl glass-card sm:p-8"
    >
      <h3 className="text-xl font-bold text-[var(--text-primary)]">
        Send Us a Message
      </h3>

      <p className="mt-2 text-sm text-[var(--text-secondary)]">
        Fill out the form below and we&apos;ll get back to you as soon as possible.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        {fields.map(({ key, label, type, placeholder }) => (
          <div key={key}>
            <label className="mb-1.5 block text-sm font-medium text-[var(--text-primary)]">
              {label}
            </label>

            <input
              type={type}
              placeholder={placeholder}
              value={form[key]}
              onChange={(e) => handleChange(key, e.target.value)}
              className={`w-full rounded-2xl border bg-[var(--bg-primary)] px-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-tertiary)] outline-none transition-all duration-200 focus:border-[#00E676]/50 ${
                errors[key]
                  ? "border-red-400/50"
                  : "border-[var(--border-glass)]"
              }`}
            />

            <AnimatePresence>
              {errors[key] && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="mt-1.5 flex items-center gap-1 text-xs text-red-400"
                >
                  <AlertCircle size={12} />
                  {errors[key]}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}

        {/* Message */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[var(--text-primary)]">
            Message
          </label>

          <textarea
            rows={5}
            placeholder="Tell us more about your inquiry..."
            value={form.message}
            onChange={(e) => handleChange("message", e.target.value)}
            className={`w-full resize-none rounded-2xl border bg-[var(--bg-primary)] px-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-tertiary)] outline-none transition-all duration-200 focus:border-[#00E676]/50 ${
              errors.message
                ? "border-red-400/50"
                : "border-[var(--border-glass)]"
            }`}
          />

          <AnimatePresence>
            {errors.message && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                className="mt-1.5 flex items-center gap-1 text-xs text-red-400"
              >
                <AlertCircle size={12} />
                {errors.message}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Submit */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#00E676] py-3.5 font-semibold text-black transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,230,118,.3)]"
        >
          <Send size={18} />
          Send Message
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
