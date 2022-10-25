// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDaf0uAx88Dv_MfgYkZ-yLl0PQLLrs8Oto",
    authDomain: "study-zone-platform.firebaseapp.com",
    projectId: "study-zone-platform",
    storageBucket: "study-zone-platform.appspot.com",
    messagingSenderId: "1095594648219",
    appId: "1:1095594648219:web:87f88c86a4cd889c389c3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;