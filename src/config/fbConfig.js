import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyD6TMvqyBwXaz9ba2f_ZaZlrgagv2dDGek",
    authDomain: "deye-8cbd2.firebaseapp.com",
    databaseURL: "https://deye-8cbd2.firebaseio.com",
    projectId: "deye-8cbd2",
    storageBucket: "deye-8cbd2.appspot.com",
    messagingSenderId: "547400149193"
  };
  firebase.initializeApp(config); 
  firebase.firestore().settings({timestampsInSnapshots:true});
  export default firebase; 
