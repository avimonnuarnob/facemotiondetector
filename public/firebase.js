// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsPicICoC7yIK_gYdiNijhGYyLalPEAN4",
  authDomain: "cvemotionnpm.firebaseapp.com",
  databaseURL: "https://cvemotionnpm-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cvemotionnpm",
  storageBucket: "cvemotionnpm.appspot.com",
  messagingSenderId: "214924602977",
  appId: "1:214924602977:web:5137eed3e5c994b0e08420",
  measurementId: "G-NMLHP5R8RE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);