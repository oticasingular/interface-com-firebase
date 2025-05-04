import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAHqGP968NZxa6AiHiFzLtX96yx_pO4vb0",
    authDomain: "interface-com-firebase.firebaseapp.com",
    projectId: "interface-com-firebase",
    storageBucket: "interface-com-firebase.firebasestorage.app",
    messagingSenderId: "849699184563",
    appId: "1:849699184563:web:693ab533f4f46809a1f5c6",
    measurementId: "G-XNCD70R6KF"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
  }

  export default firebase;