import React from "react";

export default function Rules() {
  return (
    <div className="rules">
      <h3>Instructions</h3>
      <p>
        Use the left click button on the mouse to select a space on the grid.
        <br />
        If you hit a bomb, you lose. The numbers on the board represent how many
        bombs are adjacent to a square. For example, if a square has a "3" on
        it, then there are 3 bombs next to that square.
        <br />
        The bombs could be above, below, right left, or diagonal to the square.
        <br />
        Avoid all the bombs and expose all the empty spaces to win Minesweeper.
        <br />
        <b>Tip:</b> Use the numbers to determine where you know a bomb is.
        <br />
        <b>Tip:</b> You can right click a square with the mouse to place a flag
        where you think a bomb is. This allows you to avoid that spot.
      </p>
    </div>
  );
}
