import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB-v4402I6PRoKxuEMYWA10-ihLbwAGiFU",
    authDomain: "clone-bb175.firebaseapp.com",
    projectId: "clone-bb175",
    storageBucket: "clone-bb175.appspot.com",
    messagingSenderId: "400212264233",
    appId: "1:400212264233:web:0bd05ad943f1b891812338"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };