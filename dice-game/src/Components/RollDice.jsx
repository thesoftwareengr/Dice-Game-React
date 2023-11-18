import React, { useState } from "react";
import Die from "./Die";
import "../RollDice.css";

const RollDice = () => {
  const faces = ["one", "two", "three", "four", "five", "six"];
  const [die1, setDie1] = useState("one");
  const [die2, setDie2] = useState("one");
  const [rolling, setRolling] = useState(false);

  const roll = () => {
    if (!rolling) {
      setRolling(true);

      setTimeout(() => {
        const newDie1 = faces[Math.floor(Math.random() * faces.length)];
        const newDie2 = faces[Math.floor(Math.random() * faces.length)];
        setDie1(newDie1);
        setDie2(newDie2);
        setRolling(false);
      }, 1000);
    }
  };

  return (
    <>
      <h1>Roll Dice Game</h1>
      <div className="containerr">
        <div className="RollDice">
          <div className="contains-two-container">
            <div className={`DiceContainer ${rolling ? "rolling" : ""}`}>
              <Die
                className={`DiceContainer ${rolling ? "rolling" : ""}`}
                face={die1}
              />
            </div>
            <div className={`DiceContainer ${rolling ? "rolling" : ""}`}>
              <Die
                className={`DiceContainer ${rolling ? "rolling" : ""}`}
                face={die2}
              />
            </div>
          </div>
          <button className="button" onClick={roll} disabled={rolling}>
            {rolling ? "Rolling..." : "Roll Dice"}
          </button>
        </div>
      </div>
    </>
  );
};

export default RollDice;
