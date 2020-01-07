import React, { Component } from "react";

export default class SelectSide extends Component {
  onChoose = e => {
    this.props.onSelectSide(e.target.innerHTML)
  };
  render() {
    return (
      <div
        className="selectPlayer"
        id="selectMenu"
        style={{ display: this.props.isSelectSide ? "none" : "block" }}
      >
        <p>Choose side:</p>
        <div className="sides">
          <div className="chooseSide" onClick={this.onChoose}>
            X
          </div>
          <div className="chooseSide" onClick={this.onChoose}>
            O
          </div>
        </div>
      </div>
    );
  }
}
