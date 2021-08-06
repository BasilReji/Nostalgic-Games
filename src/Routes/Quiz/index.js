import React, { useState } from "react";
import Start from "./Children/Start";
import Quiz from "./Children/Quiz";
import "./index.scss";
function QuizGame() {
  const [start, setStart] = useState(false);

  return (
    <div className="quiz">{start ? <Quiz /> : <Start props={setStart} />}</div>
  );
}

export default QuizGame;
