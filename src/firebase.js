// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDu8o_QboYvhlUKB1gZbPF_1Rtt-velD0I",
    authDomain: "clone-12c56.firebaseapp.com",
    projectId: "clone-12c56",
    storageBucket: "clone-12c56.appspot.com",
    messagingSenderId: "961376438025",
    appId: "1:961376438025:web:3f6829d506f8d38b3db5d8",
    measurementId: "G-N3EBGHPZBX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;