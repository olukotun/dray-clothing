import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'





const config = {
    apiKey: "AIzaSyCijiNZsjQvOxhwZUIzB9kL6r3NayhBWp8",
    authDomain: "crown-db-7ac7f.firebaseapp.com",
    databaseURL: "https://crown-db-7ac7f.firebaseio.com",
    projectId: "crown-db-7ac7f",
    storageBucket: "crown-db-7ac7f.appspot.com",
    messagingSenderId: "224770724590",
    appId: "1:224770724590:web:9ec9b353af4db06bc199ff",
    measurementId: "G-NYVSW3BLD9"
  };


  firebase.initializeApp(config);

  export const auth = firebase.auth();

  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle=()=>auth.signInWithPopup(provider)




export default firebase;










