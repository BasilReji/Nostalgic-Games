import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Children/Header";
import Home from "./Children/Home";
import Play from "./Children/Play";
import "./index.scss";
import { ROUTES } from "../../Routes.contants";

function RockPaperScissors() {
  const [myPick, setMyPick] = useState("");
  const [housePick, setHousePick] = useState("");
  const [gameScore, setGameScore] = useState(0);

  function newHousePick() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = choices[Math.floor(Math.random() * 3)];
    setHousePick(randomChoice);
  }

  useEffect(() => {
    newHousePick();
  }, [setMyPick]);

  return (
    <Router>
      <div className="wrapper">
        <Header score={gameScore} />
        <Switch className="main">
          <Route path="/play">
            <Play
              mine={myPick}
              house={housePick}
              score={gameScore}
              setScore={setGameScore}
              setHousePick={newHousePick}
            />
          </Route>
          <Route path={ROUTES.ROCK_PAPER_SCISSORS}>
            <Home setPick={setMyPick} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default RockPaperScissors;
