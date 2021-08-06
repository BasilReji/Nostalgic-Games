import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { ROUTES } from "./Routes.contants";
import "./index.scss";
function App() {
  return (
    <div>
      <div className="heading">
        <h1>Games</h1>
        <div className="games-container">
          <ul className="games-list">
            <li>
              <Link to={ROUTES.MINE}>Mine Sweeper</Link>
            </li>
            <li>
              <Link to={ROUTES.DINO}>Chrome Dino</Link>
            </li>
            <li>
              <Link to={ROUTES.QUIZ}>Tech Quiz</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
