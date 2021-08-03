import React from "react";
import Board from "./components/Board";
import Rules from "./components/Rules";
import "./App.css";

function App() {
  return (
    <div>
      <div className="heading">
        <h1>Mine Sweeper</h1>
      </div>
      <div className="aligned">
        <Board />
      </div>
      <Rules />
    </div>
  );
}

export default App;
