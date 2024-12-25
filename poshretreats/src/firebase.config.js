// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Import Firestore
import { getAuth } from "firebase/auth"; // Import Auth if needed
import { getStorage } from "firebase/storage"; // Import Storage if needed

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCz089GLJdWkrqcp_4yAxYqIzjfVf1rDQ0",
  authDomain: "posh-retreats.firebaseapp.com",
  projectId: "posh-retreats",
  storageBucket: "posh-retreats.firebasestorage.app",
  messagingSenderId: "1092703948834",
  appId: "1:1092703948834:web:3bb49e05421c59c29c3a7b",
  measurementId: "G-G9RBRZML5C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Initialize Firestore
const auth = getAuth(app); // Initialize Auth (Optional)
const storage = getStorage(app); // Initialize Storage (Optional)

// Export initialized services
export { app, analytics, db, auth, storage };
