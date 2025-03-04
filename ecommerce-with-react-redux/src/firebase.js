import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC3QLdX4-qqX4SEv7fUHdjI9ShRVAeR_G0",
    authDomain: "to-do-list-4eec6.firebaseapp.com",
    projectId: "to-do-list-4eec6",
    storageBucket: "to-do-list-4eec6.firebasestorage.app",
    messagingSenderId: "333912017717",
    appId: "1:333912017717:web:6a9776c5edb70620971a7c"
};

export const firebaseApp = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(firebaseApp)