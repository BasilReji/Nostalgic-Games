import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GameOver from "../GameOver";
import { QUIZ_QUESTIONS } from "../../../../Dummy/QuizQuestions";
import { shuffleArray } from "../../../../utils/ArrayFunctions";

const QuizWindow = styled.div`
  text-align: center;
  font-size: clamp(20px, 2.5vw, 24px);
  margin-top: 10vh;
`;

const Options = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 2em auto;

  @media screen and (min-width: 1180px) {
    width: 50%;
  }
`;

const Option = styled.button`
  display: block;
  border: 1px solid #616a94;
  border-radius: 15px;
  padding: 15px 30px;
  text-decoration: none;
  color: #616a94;
  background-color: #161a31;
  transition: 0.3s;
  font-size: 1em;
  outline: none;
  min-width: 500px;
  max-width: 500px;
  user-select: none;
  margin-top: 1em;
  cursor: pointer;

  @media screen and (min-width: 1180px) {
    &:hover {
      color: white;
      background-color: #616a94;
    }
  }
`;

const Question = styled.div`
  width: 70%;
  margin: 0 auto;
`;

const Quiz = ({ setStart }) => {
  const [quiz, setQuiz] = useState([]);
  const [number, setNumber] = useState(0);
  const [pts, setPts] = useState(0);

  const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);

  const pickAnswer = (e) => {
    let userAnswer = e.target.outerText;

    if (quiz[number].answer === userAnswer) setPts(pts + 1);
    setNumber(number + 1);
  };

  useEffect(() => {
    setQuiz(
      shuffleArray(QUIZ_QUESTIONS).map((item) => ({
        question: item.question,
        options: shuffle([...item.incorrect_answers, item.correct_answer]),
        answer: item.correct_answer,
      }))
    );
  }, []);

  return (
    <QuizWindow>
      {quiz[number] && (
        <>
          <Question
            dangerouslySetInnerHTML={{ __html: quiz[number].question }}
          ></Question>

          <Options>
            {quiz[number].options.map((item, index) => (
              <Option
                key={index}
                dangerouslySetInnerHTML={{ __html: item }}
                onClick={pickAnswer}
              ></Option>
            ))}
          </Options>
        </>
      )}
      {number === 5 && <GameOver setStart={setStart} pts={pts} />}
    </QuizWindow>
  );
};

export default Quiz;
