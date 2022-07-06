import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZv-ObrKp951GAiHmpgwwRAlLpaT9YP-k",
  authDomain: "disneyplus-clone-20661.firebaseapp.com",
  projectId: "disneyplus-clone-20661",
  storageBucket: "disneyplus-clone-20661.appspot.com",
  messagingSenderId: "33789377742",
  appId: "1:33789377742:web:4b43cac80b8db333b0649f",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
