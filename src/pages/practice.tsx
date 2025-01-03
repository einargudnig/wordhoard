import { calculateAccuracyPercentage } from "../utils/helper";
import useEngine from "../hooks/useEngine";
import { Timer } from "../components/typing-practice/timer";
import { UserTypings } from "../components/typing-practice/user-typings";
import { Restart } from "../components/typing-practice/restart-button";
import { Results } from "../components/typing-practice/results";
import { Words } from "../components/typing-practice/words";
import { TypePracticeLayout } from "../components/typing-practice/typing-practice-layout";

export function Practice() {
  const { words, typed, timeLeft, errors, state, restart, totalTyped } =
    useEngine();
  return (
    <div className="practice-route">
      <div className="practice-header">
        <h3>Practice</h3>
        {/* <p> */}
        {/*   Practicing your typing can significantly enhance your productivity and */}
        {/*   communication skills. By dedicating regular time to typing exercises, */}
        {/*   you can improve your speed and accuracy, making everyday computer */}
        {/*   tasks more efficient. Start with basic exercises to familiarize */}
        {/*   yourself with the keyboard layout, and gradually increase complexity */}
        {/*   by incorporating typing games and speed tests. Consistency is key; */}
        {/*   even short daily sessions can lead to substantial improvements over */}
        {/*   time. Additionally, maintaining proper posture and hand positioning */}
        {/*   can prevent strain and increase comfort while typing. */}
        {/* </p> */}
      </div>
      <div className="practice-container">
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
        {/* <Resources /> */}
      </div>
    </div>
  );
}
