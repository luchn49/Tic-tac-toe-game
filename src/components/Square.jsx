import React, { Component } from "react";

export default class Square extends Component {
  getIndex = (e) => {
    this.props.onHandleClick(e.target.id);
  }
  render() {
    return (
      <div className="square" id = {this.props.id} onClick={this.getIndex}>
        {this.props.children}
      </div>
    );
  }
}
