import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB-QHQ6rkosuieSFSFfgARHD6lzMfVIvhk",
    authDomain: "x-clone-6dcad.firebaseapp.com",
    projectId: "x-clone-6dcad",
    storageBucket: "x-clone-6dcad.appspot.com",
    messagingSenderId: "681044140276",
    appId: "1:681044140276:web:f33589543a0e92eab63ea1",
    measurementId: "G-N65QVT9KS7"
  };

  const firebaseApp = firebase.intializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;