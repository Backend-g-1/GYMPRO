import { motion } from "framer-motion";

const ScrollReveal = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.5,
  distance = 30,
  once = true,
}) => {
  const directionMap = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  };

  const hidden = { opacity: 0, ...directionMap[direction] };
  const visible = {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration, delay, ease: "easeOut" },
  };

  return (
    <motion.div
      initial={hidden}
      whileInView={visible}
      viewport={{ once, margin: "-50px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
