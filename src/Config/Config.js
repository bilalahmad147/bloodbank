import * as firebase from 'firebase/app';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyClpI_hj_2ez1DgSHl5Z5xwM5ygUK_lTpY",
  authDomain: "blood-bank-app-317d8.firebaseapp.com",
  databaseURL: "https://blood-bank-app-317d8-default-rtdb.firebaseio.com",
  projectId: "blood-bank-app-317d8",
  storageBucket: "blood-bank-app-317d8.appspot.com",
  messagingSenderId: "878810938835",
  appId: "1:878810938835:web:195c4cd79c5c4998120326"
};

firebase.initializeApp(firebaseConfig)

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

export { firebase };