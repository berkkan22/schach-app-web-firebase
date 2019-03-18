import React, { Component } from 'react';
import db from '../../FirestoreConfig';


class Round9 extends Component {

  state = {
    itmes:[]
}

componentDidMount(){
  db.collection('runde 9').onSnapshot(snapshot => {
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
        <h1>Runde 9</h1>
        { itmes && itmes !== undefined ? itmes.map((item) => (
            <p>{item.data.firstPlayerName} - {item.data.secondPlayerName}</p>
        )): null}
      </div>
    );
  }
}

export default Round9;
