import { initializeApp } from "firebase/app";
import { doc, collection, getDoc, getDocs, addDoc, deleteDoc, getFirestore, serverTimestamp } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC1Ls7wkzq1nAEc69YytsBsm3yfS0cyI5o",
    authDomain: "udemy-vue-firebase-sites-2e4bc.firebaseapp.com",
    projectId: "udemy-vue-firebase-sites-2e4bc",
    storageBucket: "udemy-vue-firebase-sites-2e4bc.appspot.com",
    messagingSenderId: "588079349594",
    appId: "1:588079349594:web:9c4d270bf75672b6d93d63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db, doc, deleteDoc, collection, addDoc, getDoc, getDocs, serverTimestamp }