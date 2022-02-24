// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjXlw57_Q-AUL2zOUrWNyeeDqL1_az90c",
  authDomain: "airquality-76840.firebaseapp.com",
  databaseURL:
    "https://airquality-76840-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "airquality-76840",
  storageBucket: "airquality-76840.appspot.com",
  messagingSenderId: "290772937307",
  appId: "1:290772937307:web:9823ae8dc493692d7f6d7e",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;
