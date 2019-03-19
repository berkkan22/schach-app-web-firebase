import React, { Component } from 'react';
import db from '../FirestoreConfig';


class RoundTest extends Component {

  state = {
    itmes:[]
}


componentDidMount(props){
  db.collection('runde ' + this.props.rundeComp).onSnapshot(snapshot => {
    this.setState({
      itmes: snapshot.docs.map(doc => {
        // console.log(doc.data());
          return {data: doc.data()};
      })
  })
  })
}

  render() {
    const {itmes} = this.state;

    return (
      <div>
        <h2>Runde {this.props.rundeComp}</h2>
        { itmes && itmes !== undefined ? itmes.map((item) => (
            <p id="gegner">{item.data.firstPlayerName} - {item.data.secondPlayerName}</p>
        )): null}
      </div>
    );
  }
}

export default RoundTest;
