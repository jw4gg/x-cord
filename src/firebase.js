import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth'; 
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB-QHQ6rkosuieSFSFfgARHD6lzMfVIvhk",
    authDomain: "x-clone-6dcad.firebaseapp.com",
    projectId: "x-clone-6dcad",
    storageBucket: "x-clone-6dcad.appspot.com",
    messagingSenderId: "681044140276",
    appId: "1:681044140276:web:f33589543a0e92eab63ea1",
    measurementId: "G-N65QVT9KS7",
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;