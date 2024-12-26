import { delay, motion } from "motion/react";
import { faker } from "@faker-js/faker";
import React from "react";
import { formatPercentage } from "../utils/helper";

export function Practice() {
  console.log("Practice route");

  const words = faker.word.words(10);
  const time = 30;
  return (
    <div className="practice-container">
      <h3>Practice</h3>

      <Timer timeLeft={time} />
      <div className="practice">{words}</div>
      <Restart onRestart={() => null} />
      <Results errors={1} accuracyPercentage={99} total={8} />
    </div>
  );
}

function Timer({ timeLeft }) {
  return (
    <div className="timer">
      <p>Time:</p>
      {timeLeft}
    </div>
  );
}

function Restart({ onRestart: handleRestart }: { onRestart: () => void }) {
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    buttonRef.current?.blur();
    console.log("Restart!");
    handleRestart();
  };

  return (
    <button ref={buttonRef} onClick={handleClick}>
      Restart
    </button>
  );
}

function Results({
  errors,
  accuracyPercentage,
  total,
}: {
  errors: number;
  accuracyPercentage: number;
  total: number;
}) {
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
