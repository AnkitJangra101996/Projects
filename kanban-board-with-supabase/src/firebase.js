import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBwdQSUO-kiseBJpZMJQf6yOfv674w0PT4",
    authDomain: "kanban-board-37fa5.firebaseapp.com",
    projectId: "kanban-board-37fa5",
    storageBucket: "kanban-board-37fa5.firebasestorage.app",
    messagingSenderId: "935458498381",
    appId: "1:935458498381:web:79eb13eeab02415cd3f904"
};

const firebaseApp = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(firebaseApp);
