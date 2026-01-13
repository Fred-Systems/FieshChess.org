// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCR6u0gNy32xQP_1I2RWRoHQ9dU4IvVrGY",
  authDomain: "fiesh-chess.firebaseapp.com",
  projectId: "fiesh-chess",
  storageBucket: "fiesh-chess.firebasestorage.app",
  messagingSenderId: "84378163512",
  appId: "1:84378163512:web:36d18c58a423789ba309cd",
  measurementId: "G-6GD8XYRFR5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Services
export const auth = getAuth(app);
export const db = getFirestore(app);
