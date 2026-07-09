import { motion } from "framer-motion";

const Button = ({ children, className = "", variant = "primary" }) => {
  const variants = {
    primary:
      "bg-[#00E676] text-black hover:shadow-[0_0_25px_rgba(0,230,118,.5)]",

    secondary:
      "bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/15",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      className={`
        px-6
        py-3
        rounded-2xl
        font-semibold
        transition-all
        duration-300
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
};

export default Button;
