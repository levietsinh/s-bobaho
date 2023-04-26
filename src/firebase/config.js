// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWoPnoXvLR8E-GXXFDsyyrVuECBGTLf0s",
  authDomain: "fir-bobaho.firebaseapp.com",
  projectId: "fir-bobaho",
  storageBucket: "fir-bobaho.appspot.com",
  messagingSenderId: "846918000677",
  appId: "1:846918000677:web:a50388ea51d89bb18fdfcc",
  measurementId: "G-WFXFS471DR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export { analytics, FacebookAuthProvider, signInWithPopup, auth };
