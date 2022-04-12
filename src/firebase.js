import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyBoPNU3OpnkgWQKqiGSFIzXqi6xRinnXFA",
    authDomain: "ichat-5b88f.firebaseapp.com",
    projectId: "ichat-5b88f",
    storageBucket: "ichat-5b88f.appspot.com",
    messagingSenderId: "761961447539",
    appId: "1:761961447539:web:86d38bf3cb4520452d6a06",
  })
  .auth();
