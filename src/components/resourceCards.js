import React, { Component } from 'react';
import './resourceCards.css'

class ResourceCards extends Component {
  constructor(props){
    super(props)
    


  }



  render() {


    return (
      <div className="resourceCard">
        <h1>{this.props.resourceTitle}</h1>
      </div>
    );
  }
}

export default ResourceCards;
