// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdrSN_7gE_mNCC58xVpcSDoqqc57IN_WQ",
  authDomain: "lider-brasil-distribuidora.firebaseapp.com",
  projectId: "lider-brasil-distribuidora",
  storageBucket: "lider-brasil-distribuidora.appspot.com",
  messagingSenderId: "706465925245",
  appId: "1:706465925245:web:bafedfde969dd3aca94914",
  measurementId: "G-KS7QJDBBYV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);