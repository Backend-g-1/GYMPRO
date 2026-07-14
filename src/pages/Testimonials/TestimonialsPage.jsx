import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import TestimonialsHero from "../../components/sections/testimonials/TestimonialsHero";
import TestimonialsStats from "../../components/sections/testimonials/TestimonialsStats";
import TestimonialsFilter from "../../components/sections/testimonials/TestimonialsFilter";
import TestimonialsGrid from "../../components/sections/testimonials/TestimonialsGrid";
import TestimonialsForm from "../../components/sections/testimonials/TestimonialsForm";
import TestimonialsLoading from "../../components/sections/testimonials/TestimonialsLoading";
import TestimonialsEmpty from "../../components/sections/testimonials/TestimonialsEmpty";

import { testimonials } from "../../data/testimonials";
import Seo from "../../components/ui/Seo";

const TestimonialsPage = () => {
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState("All");
  const [loading, setLoading] = useState(false);

  const filtered = useMemo(() => {
    return testimonials.filter((t) => {
      const matchesSearch =
        t.name.toLowerCase().includes(search.toLowerCase()) ||
        t.review.toLowerCase().includes(search.toLowerCase());

      const matchesRating = rating === "All" || t.rating === Number(rating);

      return matchesSearch && matchesRating;
    });
  }, [search, rating]);

  const showForm = !loading;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Seo title="Testimonials" />
      <TestimonialsHero />

      <TestimonialsStats testimonials={testimonials} />

      <TestimonialsFilter
        search={search}
        rating={rating}
        onSearchChange={setSearch}
        onRatingChange={setRating}
        totalResults={filtered.length}
      />

      {loading ? (
        <TestimonialsLoading />
      ) : filtered.length > 0 ? (
        <TestimonialsGrid testimonials={filtered} />
      ) : (
        <TestimonialsEmpty />
      )}

      {/* Review Form Section */}
      {showForm && (
        <section className="pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl">
              <TestimonialsForm />
            </div>
          </div>
        </section>
      )}
    </motion.div>
  );
};

export default TestimonialsPage;
