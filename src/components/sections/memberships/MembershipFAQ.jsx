import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

import Container from "../../ui/Container";
import SectionTitle from "../../ui/SectionTitle";

const FAQS = [
  {
    q: "Can I cancel my membership anytime?",
    a: "Yes! You can cancel anytime with no hidden fees. Your access continues until the end of your current billing period.",
  },
  {
    q: "Is there a free trial available?",
    a: "Absolutely. We offer a 7-day free trial on all plans so you can experience our facilities and classes before committing.",
  },
  {
    q: "Can I switch between plans?",
    a: "You can upgrade or downgrade your plan at any time. Upgrades take effect immediately, downgrades apply from the next billing cycle.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept Visa, Mastercard, American Express, PayPal, and local UZK cards. All payments are processed securely.",
  },
  {
    q: "Do you offer student or corporate discounts?",
    a: "Yes! We offer special rates for students (15% off) and corporate memberships for teams of 5 or more. Contact our support team for details.",
  },
  {
    q: "Can I bring a guest to the gym?",
    a: "Premium and Elite members can bring one guest per visit. Standard members get 2 guest passes per month. Basic members can purchase day passes.",
  },
];

const AccordionItem = ({ q, a, isOpen, onToggle }) => {
  return (
    <div
      className={`
        overflow-hidden
        rounded-2xl
        border
        transition-all
        duration-300

        ${
          isOpen
            ? "border-[#00E676]/30 bg-[#00E676]/5"
            : "border-[var(--border-glass)] bg-[var(--bg-glass)] hover:border-[var(--border-glass-hover)]"
        }
      `}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span
          className={`font-medium transition-colors duration-200 ${
            isOpen
              ? "text-[#00E676]"
              : "text-[var(--text-primary)]"
          }`}
        >
          {q}
        </span>

        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className={`shrink-0 ${isOpen ? "text-[#00E676]" : "text-[var(--text-tertiary)]"}`}
        >
          <ChevronDown size={18} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className="border-t border-[var(--border-glass)] px-6 py-4">
              <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                {a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MembershipFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="relative overflow-hidden py-24">
      <Container>
        <SectionTitle
          badge="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know about our membership plans."
        />

        <div className="mx-auto max-w-3xl space-y-3">
          {FAQS.map((item, i) => (
            <AccordionItem
              key={i}
              q={item.q}
              a={item.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        {/* Still have questions? */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)]">
            <HelpCircle size={16} className="text-[#00E676]" />

            Still have questions?{" "}
            <button className="font-medium text-[#00E676] underline-offset-2 hover:underline">
              Contact our team
            </button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default MembershipFAQ;
