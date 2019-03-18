import React, { Component } from 'react';
import db from '../FirestoreConfig';
import '../App.css';


class Player extends Component {

    state = {
        itmes:[]
    }

    componentDidMount(){
        db.collection('player').onSnapshot(snapshot => {
          this.setState({
            itmes: snapshot.docs.map(doc => {
              console.log(doc.data());
                return {data: doc.data()};
            })
        })
        })
    }

  render() {
    const {itmes} = this.state;
    return (
      <div>
        <h1>Player</h1>
        { itmes && itmes !== undefined ? itmes.map((item) => (
           <tr>
           <td id="name">{item.data.playerName}</td>
            <td id="win">{item.data.gewonnen}</td>
            <td id="lose">{item.data.verloren}</td>
            <td id="patt">{item.data.patt}</td>
            </tr>
        )): null}
      </div>
    );
  }
}

export default Player;
