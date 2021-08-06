import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { ROUTES } from "./Routes.contants";
import DinoGame from "./Routes/DinoGame";
import MineSweeper from "./Routes/MineSweeper";
import QuizGame from "./Routes/Quiz";
import Header from "./components/Header";
import SnakeGame from "./Routes/SnakeXenzia";
import TikTakToe from "./Routes/TikTakToe";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path={ROUTES.MINE} component={MineSweeper} />
        <Route path={ROUTES.DINO} component={DinoGame} />
        <Route path={ROUTES.SNAKE} component={SnakeGame} />
        <Route path={ROUTES.QUIZ} component={QuizGame} />
        <Route path={ROUTES.TIK_TAK_TOE} component={TikTakToe} />
        <Route path={ROUTES.INDEX} component={App} />

        <Redirect from={ROUTES.INDEX} to={ROUTES.INDEX} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
