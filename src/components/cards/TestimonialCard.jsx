import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const TestimonialCard = ({ item }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="
    flex
    h-70
    flex-col
    rounded-4xl
    border
    border-white/10
    bg-white/5
    p-8
    backdrop-blur-xl
  "
    >
      <Quote
        size={36}
        className="
          absolute
          right-6
          top-6
          text-[#00E676]/30
        "
      />

      <div className="flex items-center gap-4">
        <img
          src={item.image}
          alt={item.name}
          className="
            h-16
            w-16
            rounded-full
            object-cover
          "
        />

        <div>
          <h4 className="font-semibold">{item.name}</h4>

          <p className="text-sm text-gray-400">{item.role}</p>
        </div>
      </div>

      <div className="mt-5 flex gap-1">
        {[...Array(item.rating)].map((_, index) => (
          <Star
            key={index}
            size={16}
            className="
              fill-yellow-400
              text-yellow-400
            "
          />
        ))}
      </div>

      <p className="mt-5 leading-relaxed text-gray-300">{item.review}</p>
    </motion.div>
  );
};

export default TestimonialCard;
