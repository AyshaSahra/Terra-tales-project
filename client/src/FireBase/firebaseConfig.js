import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBmbFSb56UZHopAiwpQ2kjTNnRe4FV45GQ",
    authDomain: "terra-tales-5a208.firebaseapp.com",
    projectId: "terra-tales-5a208",
    storageBucket: "terra-tales-5a208.firebasestorage.app",
    messagingSenderId: "1086883106921",
    appId: "1:1086883106921:web:7d8fd27334f7012fad92f8",
    measurementId: "G-S7D0EJYTKP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
