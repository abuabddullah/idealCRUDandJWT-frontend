// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWoIINy7JYbsci1XcmAMBjy_jiChsI40w",
  authDomain: "idealcrudandjwt.firebaseapp.com",
  projectId: "idealcrudandjwt",
  storageBucket: "idealcrudandjwt.appspot.com",
  messagingSenderId: "190975960763",
  appId: "1:190975960763:web:42c26d16c2e89957d2ab9e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;
