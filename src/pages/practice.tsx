import { motion } from "motion/react";
import { faker } from "@faker-js/faker";
import React from "react";

export function Practice() {
  console.log("Practice route");

  const words = faker.word.words(10);
  const time = 30;
  return (
    <div className="practice-container">
      <h3>Practice</h3>

      <Timer timeLeft={time} />
      <div className="practice">{words}</div>
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


function Restart() {

  }
