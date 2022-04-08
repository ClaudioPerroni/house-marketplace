// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQyh4j16cDtUCVjUf8iwer3OjfbCs2V8M",
  authDomain: "house-marketplace-app-e4fb3.firebaseapp.com",
  projectId: "house-marketplace-app-e4fb3",
  storageBucket: "house-marketplace-app-e4fb3.appspot.com",
  messagingSenderId: "338393545668",
  appId: "1:338393545668:web:4131eac1f9a06042650291",
  measurementId: "G-FC7RMN3GZR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);