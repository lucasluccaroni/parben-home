import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyB9BTfnTC6b5uIKpQDuh_qyriGgFUVBWpc",
    authDomain: "parben-home.firebaseapp.com",
    projectId: "parben-home",
    storageBucket: "parben-home.firebasestorage.app",
    messagingSenderId: "501620079587",
    appId: "1:501620079587:web:7e39915016ac1163f8fed6"
};


const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
