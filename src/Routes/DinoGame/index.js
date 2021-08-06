import React, { Component } from "react";
import ChromeDinoGame from "react-chrome-dino";

export default class DinoGame extends Component {
  render() {
    return (
      <div>
        <h1 className="heading">Chrome Dino</h1>
        <ChromeDinoGame />
      </div>
    );
  }
}
