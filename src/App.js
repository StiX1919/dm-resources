import React, { Component } from "react";
// putting redux in App.js for testing,
// should create new views and not connect app.js component
import { connect } from "react-redux";

import "./App.css";
import { getResources } from "./ducks/resources";
import ResourceCard from "./components/ResourceCard/ResourceCard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "blue",
      newTitle: "",
      titles: ["is one", "is two"]
    };

    this.enterCardTitle = this.enterCardTitle.bind(this);
    this.addCardTitle = this.addCardTitle.bind(this);
  }
  componentDidMount() {
    this.props.getResources();
  }
  enterCardTitle(e) {
    this.setState({ newTitle: e.target.value });
  }
  addCardTitle(newTitle, titles) {
    if (this.state.newTitle.length > 1) {
      let newTitles = titles;
      newTitles.push(newTitle);
      this.setState({ titles: newTitles, newTitle: "" });
    }
  }

  render() {
    const cardStuff = this.props.resources.map((resource, index) => {
      return <ResourceCard key={index} resourceTitle={resource.title} />;
    });

    return (
      <div className="App">
        <header
          className="App-header"
          style={{ backgroundColor: this.state.color }}
        >
          <h1 className="App-title">Dev mountain thing</h1>
        </header>
        <div>{cardStuff}</div>
        <input
          onChange={e => this.enterCardTitle(e)}
          value={this.state.newTitle}
          placeholder="New Card title"
        />
        <button
          onClick={() => {
            this.addCardTitle(this.state.newTitle, this.state.titles);
          }}
        >
          Add New Card
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => Object.assign({}, state.resources, state.user);

export default connect(mapStateToProps, { getResources })(App);
