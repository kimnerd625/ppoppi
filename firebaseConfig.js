// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Optionally import the services that you want to use
// import {...} from "firebase/auth";
import { getDatabase } from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoIA4yhBIAYW4yqxVcy6HmznrxZ3J1QWI",
  authDomain: "ppoppi-d880e.firebaseapp.com",
  projectId: "ppoppi-d880e",
  storageBucket: "ppoppi-d880e.appspot.com",
  messagingSenderId: "396501938212",
  appId: "1:396501938212:web:115a2beb1d1c7f2d5fa8b1",
  databaseURL: "https://ppoppi-d880e-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);