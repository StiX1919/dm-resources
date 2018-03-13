import React, { Component } from "react";
import "./ResourceCard.css";

import LinkCards from "../LinkCard/LinkCard";

class ResourceCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeResource: "none",
      resourceList: false
    };

    this.openResources = this.openResources.bind(this);
  }
  openResources(title) {
    this.setState({ activeResource: title, resourceList: true });
    console.log(this.state);
  }

  render() {
    return (
      <div
        className="resourceCard"
        onClick={() => this.openResources(this.props.resourceTitle)}
      >
        <h1>{this.props.resourceTitle}</h1>
        <div>
          {this.state.resourceList && (
            <LinkCards title={this.state.activeResource} />
          )}
        </div>
      </div>
    );
  }
}

export default ResourceCards;
