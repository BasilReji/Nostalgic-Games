import React, { Component } from "react";
import Board from "./Children/Board";
import "./index.scss";
export default class TikTakToe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: "game",
    };
  }

  onToggleX = (x) => {
    this.setState({
      classes: x ? "revert game" : "game",
    });
  };
  render() {
    return (
      <div>
        <h3 className="heading">Tik-Tak-Toe</h3>
        <div className='game'>
          <div className="game-board">
            <Board onToggleX={this.onToggleX} />
          </div>
        </div>
      </div>
    );
  }
}
