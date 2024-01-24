// import { initializeApp } from 'firebase/app';
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


// const firebaseConfig = {
//     apiKey: "AIzaSyCiRthjfM0bIWpCVsnEjY_AzOab8M6iXD4",
//     authDomain: "tour-and-travel-5d250.firebaseapp.com",
//     projectId: "tour-and-travel-5d250",
//     storageBucket: "tour-and-travel-5d250.appspot.com",
//     messagingSenderId: "170748621270",
//     appId: "1:170748621270:web:92183b75ef5b0cf2263477"
//   };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// export { auth };

import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyCiRthjfM0bIWpCVsnEjY_AzOab8M6iXD4",
  authDomain: "tour-and-travel-5d250.firebaseapp.com",
  projectId: "tour-and-travel-5d250",
  storageBucket: "tour-and-travel-5d250.appspot.com",
  messagingSenderId: "170748621270",
  appId: "1:170748621270:web:92183b75ef5b0cf2263477"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
