import { motion } from "motion/react";

export function Caret() {
  return (
    <motion.div
      className="caret"
      aria-hidden={true}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 1 }}
      transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
    />
  );
}
