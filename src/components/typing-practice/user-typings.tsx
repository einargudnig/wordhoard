import { Caret } from "./caret";
import { Character } from "./character";

export function UserTypings({
  userInputs,
  words,
}: {
  userInputs: string;
  words: string;
}) {
  const typedCharacters = userInputs.split("");

  return (
    <div className="user-typings">
      {typedCharacters.map((char, index) => {
        return (
          <Character
            key={`${char}_${index}`}
            actual={char}
            expected={words[index]}
          />
        );
      })}
      <Caret />
    </div>
  );
}
