import React, { Component } from 'react';
import './App.css';

import Title from './comonents/Title'
import Player from './comonents/Player'
import RoundTest from './comonents/RundeTest'

import db from './FirestoreConfig';


class App extends Component {

  componentDidMount(){
    db.collection('player').get().then(snap => {
      size = snap.size
      console.log(size);
    })
  }

  createRunde = () => {
    let runde = []
    // Outer loop to create parent,
    for (let i = 1; i < 5; i++) {
      runde.push(<div id="runde"><RoundTest rundeComp={i}/></div>)
    }
    return runde
  }


  render() {
    return (
      <div className="APP">
        <div id="title">
          <Title/>
        </div>
        <div id="player">
          <Player/>
        </div>

        <div id="runderoot">
          {this.createRunde()}
        </div>
      </div>
    );
  }
}

export default App;
