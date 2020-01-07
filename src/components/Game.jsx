import React, { Component } from "react";
import SelectSide from "./SelectSide";
import PlayAgain from "./PlayAgain";
import Board from "./Board";

export default class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSelectSide: false,
      player: null,
      gameEnd: false,
      winner: null
    };
  }
  onSelectSide = player => {
    this.setState({
      isSelectSide: !this.state.isSelectSide,
      player
    });
  };
  onPlayAgain = () => {
    this.setState({
      gameEnd: false
    });
  };
  getWinner = winner => {
    this.setState({
      winner,
      gameEnd: true
    });
  };
  render() {
    return (
      <div>
        <SelectSide
          isSelectSide={this.state.isSelectSide}
          onSelectSide={this.onSelectSide}
        />
        <Board player={this.state.player} getWinner={this.getWinner} />
        <PlayAgain
          gameEnd={this.state.gameEnd}
          onPlayAgain={this.onPlayAgain}
          winner={this.state.winner}
        />
      </div>
    );
  }
}
