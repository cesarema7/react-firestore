import * as firebase from 'firebase';
import firestore from 'firebase/firestore'
//import app from 'firebase';

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyCF9tuErBMu-uDPG10oQnqBmnQJGsL115A",
    authDomain: "control-ambulancias-d69ec.firebaseapp.com",
    databaseURL: "https://control-ambulancias-d69ec.firebaseio.com",
    projectId: "control-ambulancias-d69ec",
    storageBucket: "control-ambulancias-d69ec.appspot.com",
    messagingSenderId: "246428788276",
    appId: "1:246428788276:web:e8ced495b53de5ce9b8c61"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;