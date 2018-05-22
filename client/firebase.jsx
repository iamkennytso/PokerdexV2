import React from 'react';
import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyC4xpr45pi8qYJYnAKqaXfL_c9Vj-Bq2ps",
  authDomain: "pokerdexer.firebaseapp.com",
  databaseURL: "https://pokerdexer.firebaseio.com",
  projectId: "pokerdexer",
  storageBucket: "pokerdexer.appspot.com",
  messagingSenderId: "294115950611"
};

var Fire = firebase.initializeApp(config);
export default Fire;