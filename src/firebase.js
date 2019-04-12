import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

var config = {
    apiKey: "AIzaSyBQ4jBY52XMCjMbgTFHI3aPkomA8fUlbp4",
    authDomain: "mi-lista-54f0a.firebaseapp.com",
    databaseURL: "https://mi-lista-54f0a.firebaseio.com",
    projectId: "mi-lista-54f0a",
    storageBucket: "mi-lista-54f0a.appspot.com",
    messagingSenderId: "893774281368"
  };
  firebase.initializeApp(config);
  
  const firestore = firebase.firestore();
  const settings = {/* your settings... */ timestampsInSnapshots: true};
  firestore.settings(settings);

export default firebase