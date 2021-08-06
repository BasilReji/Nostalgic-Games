import React from "react";
import { Component } from "react";
import Board from "../../components/Board";
import Rules from "../../components/Rules";

export default class MineSweeper extends Component {
  render() {
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
}
