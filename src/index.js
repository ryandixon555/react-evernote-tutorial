import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyDKF1vQdaHDzSp6kLQCE9tXkxTs8YSJT0Q",
  authDomain: "evernote-clone-2d72d.firebaseapp.com",
  databaseURL: "https://evernote-clone-2d72d.firebaseio.com",
  projectId: "evernote-clone-2d72d",
  storageBucket: "evernote-clone-2d72d.appspot.com",
  messagingSenderId: "6060584410",
  appId: "1:6060584410:web:1087db39d018b6045864e3",
  measurementId: "G-FHJHESTWSZ"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('evernote-container'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
