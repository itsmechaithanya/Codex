// src/utility/authService.jsx
import { auth } from '../firebase'; // Ensure this import points correctly to firebase.js
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// Function to register users with a domain restriction
export const registerUser = async (email, password) => {
  if (!email.endsWith('@woxsen.edu.in')) {
    alert('Only @woxsen.edu.in emails are allowed.');
    return;
  }

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert('Registration successful!');
  } catch (error) {
    console.error('Error registering user:', error);
    alert(error.message);
  }
};

// Function to log in users with a domain restriction
export const loginUser = async (email, password) => {
  if (!email.endsWith('@woxsen.edu.in')) {
    alert('Only @woxsen.edu.in emails are allowed.');
    return;
  }

  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert('Login successful!');
  } catch (error) {
    console.error('Error logging in:', error);
    alert(error.message);
  }
};