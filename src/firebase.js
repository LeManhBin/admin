import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {getDatabase} from "firebase/database";
import "firebase/storage";
import firebase from "firebase/compat/app"

const firebaseConfig = {
  apiKey: "AIzaSyA8yG5u1sBlyZmI4hJmqiR81j5pb5F9Bz4",
  authDomain: "fastfooddelivery-646b3.firebaseapp.com",
  databaseURL: "https://fastfooddelivery-646b3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fastfooddelivery-646b3",
  storageBucket: "fastfooddelivery-646b3.appspot.com",
  messagingSenderId: "156540035401",
  appId: "1:156540035401:web:f243528b418881adb13a98",
  measurementId: "G-WQY72443NV"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
export const database = getDatabase(app)
// export const storageRef = firebase.storage().ref();