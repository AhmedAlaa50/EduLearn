// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNL9Lt0FG08sfzXp85Gd9TvlWRx3Us4Us",
  authDomain: "edulearn-3377f.firebaseapp.com",
  projectId: "edulearn-3377f",
  storageBucket: "edulearn-3377f.firebasestorage.app",
  messagingSenderId: "927084800254",
  appId: "1:927084800254:web:9aa51aeed522e965091daf",
  // measurementId: "G-J2QE47N5CS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
