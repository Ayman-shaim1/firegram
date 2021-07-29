import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Fnirebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAAggfCqsF1cXiOYF4dBje82cBEPrjhX1w",
  authDomain: "firegram-96be1.firebaseapp.com",
  projectId: "firegram-96be1",
  storageBucket: "firegram-96be1.appspot.com",
  messagingSenderId: "723186205652",
  appId: "1:723186205652:web:d28e7adca6f58356824c41",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export { projectFireStore, projectStorage,timestamp };
