import React, { Component } from 'react';
import './App.css';

import Title from './comonents/Title'
import Player from './comonents/Player'

import Round1 from './comonents/runde/Round1'
import Round2 from './comonents/runde/Round2'
import Round3 from './comonents/runde/Round3'
import Round4 from './comonents/runde/Round4'
import Round5 from './comonents/runde/Round5'
import Round6 from './comonents/runde/Round6'
import Round7 from './comonents/runde/Round7'
import Round8 from './comonents/runde/Round8'
import Round9 from './comonents/runde/Round9'
import Round10 from './comonents/runde/Round10'
import Round11 from './comonents/runde/Round11'
import Round12 from './comonents/runde/Round12'
import Round13 from './comonents/runde/Round13'
import Round14 from './comonents/runde/Round14'
import Round15 from './comonents/runde/Round15'

class App extends Component {
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
        <div id="runde">
          <Round1/>
        </div>
        <div id="runde">
          <Round2/>
        </div>
        <div id="runde">
          <Round3/>
        </div>
        <div id="runde">
          <Round4/>
        </div>
        <div id="runde">
          <Round5/>
        </div>
        <div id="runde">
          <Round6/>
        </div>
        <div id="runde">
          <Round7/>
        </div>
        <div id="runde">
          <Round8/>
        </div>
        <div id="runde">
          <Round9/>
        </div>
        <div id="runde">
          <Round10/>
        </div>
        <div id="runde">
          <Round11/>
        </div>
        <div id="runde">
          <Round12/>
        </div>
        <div id="runde">
          <Round13/>
        </div>
        <div id="runde">
          <Round14/>
        </div>
        <div id="runde">
          <Round15/>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
