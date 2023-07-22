import firebase from "firebase/compat/app"; // Import the compat version for Firebase 9+
import "firebase/compat/firestore"; // Import other Firebase services you need
import "firebase/compat/auth";


const firebaseConfig = {
  apiKey: "AIzaSyC0GiTPEYSxbVm8jn678BvwxAxrWEHliko",
  authDomain: "signal-clone-b8c11.firebaseapp.com",
  projectId: "signal-clone-b8c11",
  storageBucket: "signal-clone-b8c11.appspot.com",
  messagingSenderId: "723486470159",
  appId: "1:723486470159:web:f784bb06dc04b0a149f37a"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };