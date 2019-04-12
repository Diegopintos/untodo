import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

var config = {
    apiKey: "CUCUSOY UNA API",
    authDomain: "CUCU SOY UN DOMINIO",
    databaseURL: "CUCU SOY UNA DATAURL",
    projectId: "CUCU SOY UNA ID",
    storageBucket: "CUCU",
    messagingSenderId: "CUCU"
  };
  firebase.initializeApp(config);
  
  const firestore = firebase.firestore();
  const settings = {/* your settings... */ timestampsInSnapshots: true};
  firestore.settings(settings);

export default firebase
