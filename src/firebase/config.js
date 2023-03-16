import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC1Ls7wkzq1nAEc69YytsBsm3yfS0cyI5o",
    authDomain: "udemy-vue-firebase-sites-2e4bc.firebaseapp.com",
    projectId: "udemy-vue-firebase-sites-2e4bc",
    storageBucket: "udemy-vue-firebase-sites-2e4bc.appspot.com",
    messagingSenderId: "588079349594",
    appId: "1:588079349594:web:8b30f08f8f265b1cd93d63"
};

// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()

const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }