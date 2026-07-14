import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { contactInfo } from "../../../data/contact";

const ContactMap = () => {
  return (
    <section className="pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-3xl border border-[var(--border-glass)] bg-[var(--bg-glass)] glass-card"
        >
          {/* Map Header */}
          <div className="flex items-center gap-3 border-b border-[var(--border-glass)] px-6 py-4">
            <MapPin size={18} className="text-[#00E676]" />
            <span className="text-sm font-medium text-[var(--text-primary)]">
              Our Location
            </span>
            <span className="ml-auto text-xs text-[var(--text-tertiary)]">
              {contactInfo.address.line1}, {contactInfo.address.line2}
            </span>
          </div>

          {/* Map Iframe */}
          <div className="h-[400px] w-full lg:h-[500px]">
            <iframe
              src={contactInfo.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="GYMPRO Location"
              className="grayscale-[30%] transition-all duration-500 hover:grayscale-0"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMap;
