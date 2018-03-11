import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

import ResourceCards from './components/resourceCards'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      color: 'blue',
      newTitle: '',
      titles: ['is one', 'is two']
    }

    this.testFunction = this.testFunction.bind(this)

    this.enterCardTitle = this.enterCardTitle.bind(this)
    this.addCardTitle = this.addCardTitle.bind(this)
  }

  testFunction() {
    axios.get('/api/testThing').then(res => {
      this.setState({color: res.data})
    })
  }
  enterCardTitle(e) {
    this.setState({newTitle: e.target.value})
  }
  addCardTitle(newTitle, titles) {

    if(this.state.newTitle.length > 1){
      let newTitles = titles
      newTitles.push(newTitle)
      this.setState({titles: newTitles, newTitle: ''})
    }
    
  }

  render() {
    const cardStuff = this.state.titles.map(title => {
      return <ResourceCards resourceTitle={title}/>
    })
    

    return (
      <div className="App">
        <header className="App-header" style={{'background-color': this.state.color}}>
          <h1 className="App-title">Dev mountain thing</h1>
        </header>
        <div>
          {cardStuff}
        </div>
        <input onChange={e => this.enterCardTitle(e)} value={this.state.newTitle} placeholder='New Card title'></input>
        <button onClick={() => {
          this.addCardTitle(this.state.newTitle, this.state.titles)
        }} >Add New Card</button>
        <h2>{this.state.color}</h2>
        <button onClick={() => this.testFunction()}>Does thing</button>
      </div>
    );
  }
}

export default App;
