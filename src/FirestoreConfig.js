import firebase from 'firebase/app';
import 'firebase/firebase-firestore';

var config = {
    apiKey: "AIzaSyB4nUgYGmoQABfPB-xNNSxndwuWNSeIIjA",
    authDomain: "schach-turnier.firebaseapp.com",
    databaseURL: "https://schach-turnier.firebaseio.com",
    projectId: "schach-turnier",
    storageBucket: "schach-turnier.appspot.com",
    messagingSenderId: "981964467781"
};
firebase.initializeApp(config);

let db = firebase.firestore();
db.settings({timestampsInSnapshots: true});

export default db;