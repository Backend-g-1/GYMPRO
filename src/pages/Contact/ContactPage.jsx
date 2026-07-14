import { motion } from "framer-motion";

import ContactHero from "../../components/sections/contact/ContactHero";
import ContactForm from "../../components/sections/contact/ContactForm";
import ContactInfo from "../../components/sections/contact/ContactInfo";
import ContactMap from "../../components/sections/contact/ContactMap";
import Seo from "../../components/ui/Seo";

const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Seo title="Contact" />
      <ContactHero />

      {/* Contact Form + Info Grid */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-5">
            {/* Form — 3 cols */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Info — 2 cols */}
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <ContactMap />
    </motion.div>
  );
};

export default ContactPage;
