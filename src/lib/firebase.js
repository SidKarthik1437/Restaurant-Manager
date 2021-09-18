import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCTOcygtj7R8bZLkltoz4BmTpZIfYkpD9U",
  authDomain: "restoman-c1c8a.firebaseapp.com",
  projectId: "restoman-c1c8a",
  storageBucket: "restoman-c1c8a.appspot.com",
  messagingSenderId: "1058211268416",
  appId: "1:1058211268416:web:7d47158e7bd87557265ca5"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
