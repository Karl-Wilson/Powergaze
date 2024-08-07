import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyC-BmAJ3-vY0BPcftAABQgG8a4Rd5aqAEo",
    authDomain: "powergaze-b398e.firebaseapp.com",
    projectId: "powergaze-b398e",
    storageBucket: "powergaze-b398e.appspot.com",
    messagingSenderId: "1046501734675",
    appId: "1:1046501734675:web:7c6258948550eda887c2e6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);