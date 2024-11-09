// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import getAuth for authentication

const firebaseConfig = {
    apiKey: "AIzaSyBd_EWtRWRi4_XqLlnX7YasG1pAL0M6eeo",
    authDomain: "codex-a0926.firebaseapp.com",
    projectId: "codex-a0926",
    storageBucket: "codex-a0926.firebasestorage.app",
    messagingSenderId: "560549189566",
    appId: "1:560549189566:web:44b199ac808496c7b60bef",
    measurementId: "G-234NFFF8KR"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize and export the auth instance
const auth = getAuth(app); // Use getAuth to initialize authentication
export { auth };
export default app;