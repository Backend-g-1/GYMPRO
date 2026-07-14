import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const BackButton = ({ to, label = "Back" }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    } else {
      navigate(-1);
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ x: -4 }}
      whileTap={{ scale: 0.96 }}
      className="
        inline-flex
        items-center
        gap-2
        rounded-xl
        border
        border-[var(--border-glass)]
        bg-[var(--bg-glass)]
        px-4
        py-2.5
        text-sm
        font-medium
        text-[var(--text-secondary)]
        transition-all
        duration-200
        hover:border-[var(--border-glass-hover)]
        hover:text-[var(--text-primary)]
      "
    >
      <ArrowLeft size={16} />

      {label}
    </motion.button>
  );
};

export default BackButton;
