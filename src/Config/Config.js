import Firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyClpI_hj_2ez1DgSHl5Z5xwM5ygUK_lTpY",
    authDomain: "blood-bank-app-317d8.firebaseapp.com",
    databaseURL: "https://blood-bank-app-317d8-default-rtdb.firebaseio.com",
    projectId: "blood-bank-app-317d8",
    storageBucket: "blood-bank-app-317d8.appspot.com",
    messagingSenderId: "878810938835",
    appId: "1:878810938835:web:802b97656fe587d9120326"
  };

  const app = Firebase.initializeApp(firebaseConfig);
  export const db = app.database();