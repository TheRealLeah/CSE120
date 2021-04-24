/* fb.js should look something like this*/
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDja8e25c5qWuocnY2rS94o0PL4av7sbmY",
  authDomain: "instagram-demo-da68b.firebaseapp.com",
  projectId: "instagram-demo-da68b",
  storageBucket: "instagram-demo-da68b.appspot.com",
  messagingSenderId: "199629117787",
  appId: "1:199629117787:web:e2b7ca0cff099ca117e27e",
  measurementId: "G-WKQ071G99T",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
