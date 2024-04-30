// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "process.env.apiKey",
  authDomain: "pintrest-clone-70db1.firebaseapp.com",
  projectId: "pintrest-clone-70db1",
  storageBucket: "pintrest-clone-70db1.appspot.com",
  messagingSenderId: "627865703189",
  appId: "1:627865703189:web:157b00b36b9198c71ccf1c",
  measurementId: "G-V6JDZSM6L6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;