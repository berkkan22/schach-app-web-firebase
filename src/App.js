import React, {
  Component
} from 'react';
import './App.css';

import Title from './comonents/Title'
import Player from './comonents/Player'
import RoundTest from './comonents/RundeTest'

import db from './FirestoreConfig';


class App extends Component {

  state = {
    size: 0
  }

  componentDidMount() {
    db.collection('player').get().then(snap => {
      this.setState({
        size: snap.size
      })
    })
  }


  createRunde = () => {

    console.log(this.state.size);
    let runde = []
    // Outer loop to create parent,
    for (let i = 1; i < this.state.size + 1; i++) {
      runde.push( < div id = "runde" > < RoundTest rundeComp = {
          i
        }
        /></div > )
    }
    return runde
  }


  render() {
    return ( <
      div className = "APP" >
      <
      div id = "title" >
      <
      Title / >
      <
      /div> <
      div id = "player" >
      <
      Player / >
      <
      /div>

      <
      div id = "runderoot" > {
        this.createRunde()
      } <
      /div> <
      /div>
    );
  }
}

export default App;