import { delay, motion } from "motion/react";
import React from "react";
import { calculateAccuracyPercentage, formatPercentage } from "../utils/helper";
import useEngine, { State } from "../hooks/useEngine";

export function Practice() {
  console.log("Practice route");
  const { words, typed, timeLeft, errors, state, restart, totalTyped } =
    useEngine();
  return (
    <div className="practice-container">
      <h3>Practice</h3>

      <Timer timeLeft={timeLeft} />
      <div className="practice-overlay">
        <div className="practice">{words}</div>
        <UserTypings userInputs={typed} />
      </div>
      <Restart onRestart={() => null} />
      <Results
        state={state}
        errors={errors}
        accuracyPercentage={calculateAccuracyPercentage(errors, totalTyped)}
        total={totalTyped}
      />
    </div>
  );
}

function Caret() {
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

function UserTypings({ userInputs }: { userInputs: string }) {
  const typedCharacters = userInputs.split("");

  return (
    <div className="user-typings">
      {typedCharacters.map((char, index) => {
        return <Character key={`${char}_${index}`} char={char} />;
      })}
      <Caret />
    </div>
  );
}

function Character({ char }: { char: string }) {
  return <span className="char">{char}</span>;
}
