import React, { Component } from 'react';
import db from '../../FirestoreConfig';


class Round1 extends Component {

  state = {
    itmes:[]
}

componentDidMount(){
  // var size;

  db.collection('player').get().then((snapShot) => {
    // size = parseInt(snapShot.size, 10);
    // console.log(size);
})
// var leange = size;

// for (let index = 1; index < 4; index++) {
//   db.collection('runde 1').get().then((snapShot) => {
//     this.setState({
//         itmes: snapShot.docs.map(doc => {
//             return {data: doc.data()};
//         })
//     })
// })
// }

db.collection('runde 1').onSnapshot(snapshot => {
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
        <h1>Runde 1</h1>
        { itmes && itmes !== undefined ? itmes.map((item) => (
            <p>{item.data.firstPlayerName} - {item.data.secondPlayerName}</p>
        )): null}
      </div>
    );
  }
}

export default Round1;
