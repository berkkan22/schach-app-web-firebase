import React, { Component } from 'react';
import db from '../../FirestoreConfig';


class Round6 extends Component {

  state = {
    itmes:[]
}

componentDidMount(){
  db.collection('runde 6').onSnapshot(snapshot => {
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
        <h1>Runde 6</h1>
        { itmes && itmes !== undefined ? itmes.map((item) => (
            <p>{item.data.firstPlayerName} - {item.data.secondPlayerName}</p>
        )): null}
      </div>
    );
  }
}

export default Round6;
