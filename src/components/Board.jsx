import React, { Component } from "react";
import Square from "./Square";

export default class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      board: Array(9).fill(null),
      player: null
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (!prevState.player && !(nextProps.player === prevState.player)) {
      return {
        player: nextProps.player
      };
    }
    return null;
  }
  checkWinner = () => {
    let { board } = this.state;
    const winLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < winLines.length; i++) {
      const [a, b, c] = winLines[i];
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        return board[a];
      }
    }
    return null;
  };
  getWinner = () => {
    const winner = this.checkWinner();
    const isFinish = this.isFinish(this.state.board);
    if (winner || isFinish) {
      this.props.getWinner(winner);
      this.setState({
        board: Array(9).fill(null)
      });
    } else if (!winner && isFinish) {
      this.props.getWinner(winner);
      this.setState({
        board: Array(9).fill(null)
      });
    }
  };
  isFinish = board => {
    for (let i in board) {
      if (!board[i]) return false;
    }
    return true;
  };
  onHandleClick = index => {
    let newBoard = this.state.board;
    if (newBoard[index] === null) {
      newBoard[index] = this.state.player;
      this.setState({
        board: newBoard,
        player: this.state.player === "X" ? "O" : "X"
      });
    }
    this.getWinner();
  };
  renderSquare = () => {
    return this.state.board.map((item, index) => (
      <Square key={index} onHandleClick={this.onHandleClick} id={index}>
        {item}
      </Square>
    ));
  };
  render() {
    return (
      <div>
        <div className="board">{this.renderSquare()}</div> 
    <p className = "nextPlayer">next player is: {this.state.player}</p>
      </div>
    );
  }
}
