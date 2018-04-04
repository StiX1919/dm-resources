import React, { Component } from "react";
// putting redux in App.js for testing,
// should create new views and not connect app.js component
import { connect } from "react-redux";

import "./App.css";
import { getResources,
        getTopics } from "./ducks/resources";
import ResourceCard from "./components/ResourceCard/ResourceCard";

import logo from './images/DevMtnLogoNoBG.png'

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
    this.props.getTopics();
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
    const cardStuff =
      this.props.resources[0] &&
      this.props.resources.map((resource, index) => {
        return <ResourceCard key={index} resourceTitle={resource.resource_title} />;
      });

    const filterSelections = 
    this.props.topics[0] &&
    this.props.topics.map((topic, index) => {
        return <div className='filterHolder'><h2 className="filters">{topic.general_title}</h2></div>
    })
    return (
      <div className="App">
        <header className="sidebar">
          <img className="logo" src='https://s3.amazonaws.com/devmountain/www/img/dm_white_logo.png' alt=""/>

          <div className='filterContainer'>
            {filterSelections}
          </div>
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
          delete this...
        </button>
      </div>
    );
  }
}


const mapStateToProps = state => Object.assign({}, state.resources, state.user);

export default connect(mapStateToProps, { getResources, getTopics })(App);
