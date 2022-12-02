// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDSD_PvdFeMnMMt5LObkjmczxd31h3cFWo",
    authDomain: "hotel-room-booking-67e7c.firebaseapp.com",
    projectId: "hotel-room-booking-67e7c",
    storageBucket: "hotel-room-booking-67e7c.appspot.com",
    messagingSenderId: "268151302058",
    appId: "1:268151302058:web:60c6bb5147b470c14f6dd3",
    measurementId: "G-LMTSBG8VDY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;