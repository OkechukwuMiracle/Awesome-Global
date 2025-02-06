import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSEWiBlM3dItX8ez42DEm-X6bJmy48pyY",
  authDomain: "awesome-global-auth.firebaseapp.com",
  projectId: "awesome-global-auth",
  storageBucket: "awesome-global-auth.firebasestorage.app",
  messagingSenderId: "692377946111",
  appId: "1:692377946111:web:84fe93291fcb10796a89ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);