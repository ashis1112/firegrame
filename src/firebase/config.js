import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyDqCO6l_Gxyn7FQSttGtkoNUy56ahlytII",
    authDomain: "firegram-9ff91.firebaseapp.com",
    projectId: "firegram-9ff91",
    storageBucket: "firegram-9ff91.appspot.com",
    messagingSenderId: "954833129991",
    appId: "1:954833129991:web:a390767698a4a368e190a2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const projectStorage=firebase.storage()
const projectfirestore=firebase.firestore()
const timestamp=firebase.firestore.FieldValue.serverTimestamp

export {projectStorage,projectfirestore,timestamp}