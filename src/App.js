import React, { Component } from "react";
// putting redux in App.js for testing,
// should create new views and not connect app.js component
import { connect } from "react-redux";

import "./App.css";
import { getResources,
        getGeneralTopics,
        getTopics } from "./ducks/resources";
import ResourceCard from "./components/ResourceCard/ResourceCard";

import logo from './images/DevMtnLogoNoBG.png'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "blue",
      newTitle: "",
      titles: ["is one", "is two"],
      
      selectedIndex: 0,
      GTID: 0,
      openTopics: false
    };

    this.enterCardTitle = this.enterCardTitle.bind(this);
    this.addCardTitle = this.addCardTitle.bind(this);
    this.selectGeneralTopic = this.selectGeneralTopic.bind(this)
  }

  componentDidMount() {
    this.props.getResources();
    this.props.getGeneralTopics();
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

  selectGeneralTopic(id, index) {
    if(this.state.openTopics === false) {
      this.setState({selectedIndex: index, GTID: id, openTopics: true})
    }
    else this.setState({selectedIndex: 0, GTID: 0, openTopics: false})
    
  }


  render() {
    const cardStuff =
      this.props.resources[0] &&
      this.props.resources.map((resource, index) => {
        return <ResourceCard key={index} resourceTitle={resource.resource_title} />;
      });

    const topics = 
      this.props.topics[0] &&
      this.props.topics.map((topics, index) => {
        return <div><h2 className="filters">{topics.topic_title}</h2></div>
    })

    const generalTopics = 
      this.props.generalTopics[0] &&
      this.props.generalTopics.map((topic, index) => {
        return <div className='filterHolder' onClick={() => this.selectGeneralTopic(index, topic.id)} >
                  <h2 className="filters">{topic.general_title}</h2>
                  {this.state.openTopics === true &&
                    topics
                  }
                </div>
    })

    

    return (
      <div className="App">
        <header className="sidebar">
          <img className="logo" src='https://s3.amazonaws.com/devmountain/www/img/dm_white_logo.png' alt=""/>

          <div className='filterContainer'>
            {generalTopics}
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

export default connect(mapStateToProps, { getResources, getGeneralTopics, getTopics })(App);
