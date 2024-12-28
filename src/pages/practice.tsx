import { calculateAccuracyPercentage } from "../utils/helper";
import useEngine from "../hooks/useEngine";
import { Timer } from "../components/typing-practice/timer";
import { UserTypings } from "../components/typing-practice/user-typings";
import { Restart } from "../components/typing-practice/restart-button";
import { Results } from "../components/typing-practice/results";
import { Words } from "../components/typing-practice/words";
import { TypePracticeLayout } from "../components/typing-practice/typing-practice-layout";
import { Resources } from "../components/typing-practice/resources";

export function Practice() {
  const { words, typed, timeLeft, errors, state, restart, totalTyped } =
    useEngine();
  return (
    <div className="practice-container">
      <h3>Practice</h3>

      <Timer timeLeft={timeLeft} />
      <TypePracticeLayout>
        <Words words={words} />
        <UserTypings userInputs={typed} words={words} />
      </TypePracticeLayout>
      <Restart onRestart={restart} />
      <Results
        state={state}
        errors={errors}
        accuracyPercentage={calculateAccuracyPercentage(errors, totalTyped)}
        total={totalTyped}
      />
      <Resources />
    </div>
  );
}
