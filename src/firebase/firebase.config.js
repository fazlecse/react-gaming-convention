// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7OBtFv8WfFOGZ5eDUd2PCPdKWhu3NHUA",
  authDomain: "react-gaming-convention.firebaseapp.com",
  projectId: "react-gaming-convention",
  storageBucket: "react-gaming-convention.appspot.com",
  messagingSenderId: "485234222518",
  appId: "1:485234222518:web:22398d9ed1b04b88e88d17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;