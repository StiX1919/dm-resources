import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      color: 'blue'
    }

    this.testFunction = this.testFunction.bind(this)
  }

  testFunction() {
    axios.get('/api/testThing').then(res => {
      this.setState({color: res.data})
    })
  }

  render() {


    return (
      <div className="App">
        <header className="App-header" style={{'background-color': this.state.color}}>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>{this.state.color}</h2>
        <button onClick={() => this.testFunction()}>Does thing</button>
      </div>
    );
  }
}

export default App;
