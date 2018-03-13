import React, { Component } from "react";
import "./LinkCard.css";

class LinkCards extends Component {
  render() {
    return (
      <div className="linkCard">
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

export default LinkCards;
