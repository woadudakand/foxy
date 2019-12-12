import * as firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDfLFHYHY00wDlHDIztOxOM7X5D_4irvqA",
  authDomain: "foxy-39a44.firebaseapp.com",
  databaseURL: "https://foxy-39a44.firebaseio.com",
  projectId: "foxy-39a44",
  storageBucket: "foxy-39a44.appspot.com",
  messagingSenderId: "1078630055774",
  appId: "1:1078630055774:web:1966f1b3f401715d4319cf",
  measurementId: "G-VXMWBEYH8G"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
    
  export default firebase;