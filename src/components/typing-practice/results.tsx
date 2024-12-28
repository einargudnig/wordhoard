import { motion } from "motion/react";
import { formatPercentage } from "../../utils/helper";
import { State } from "../../hooks/useEngine";

export function Results({
  state,
  errors,
  accuracyPercentage,
  total,
}: {
  state: State;
  errors: number;
  accuracyPercentage: number;
  total: number;
}) {
  if (state !== "finish") {
    return null;
  }

  const initial = { opacity: 0 };
  const animate = { opacity: 1 };
  const duration = { duration: 0.3 };

  return (
    <motion.div className="results">
      <motion.p
        initial={initial}
        animate={animate}
        transition={{ ...duration, delay: 0.5 }}
      >
        Errors: {errors}
      </motion.p>
      <motion.p
        initial={initial}
        animate={animate}
        transition={{ ...duration, delay: 1 }}
      >
        Accuracy: {formatPercentage(accuracyPercentage)}%
      </motion.p>
      <motion.p
        initial={initial}
        animate={animate}
        transition={{ ...duration, delay: 1.4 }}
      >
        Total: {total}
      </motion.p>
    </motion.div>
  );
}
