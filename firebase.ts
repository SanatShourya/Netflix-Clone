// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCzVSSfUNVHPkrJflkqZHYzd3ojqYh5ddI",
    authDomain: "netflix-clone-1acbf.firebaseapp.com",
    projectId: "netflix-clone-1acbf",
    storageBucket: "netflix-clone-1acbf.firebasestorage.app",
    messagingSenderId: "1023484644001",
    appId: "1:1023484644001:web:8d830efbb4869034063ee0",
    measurementId: "G-T1GCJ1NEZT"
  };
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }