import React, { Component } from "react";

export default class PlayAgain extends Component {
  onHandleAgain = () => {
    this.props.onPlayAgain();
  };
  render() {
    return (
      <div
        className="gameEnd"
        id="gameEndMenu"
        style={{ display: this.props.gameEnd ? "block" : "none" }}
      >
        <h1>
          {!this.props.winner
            ? "Draw"
            : this.props.winner === "X"
            ? "Player X win"
            : "Play O win"}
        </h1>
        <button className="replay" onClick={this.onHandleAgain}>
          Play again?
        </button>
      </div>
    );
  }
}
