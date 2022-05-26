// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey: "AIzaSyBEwe3-ausJp7ZL5P43Z7fPqMl30yY7vcU",
    authDomain: "tools-menufacturer-website.firebaseapp.com",
    projectId: "tools-menufacturer-website",
    storageBucket: "tools-menufacturer-website.appspot.com",
    messagingSenderId: "659353722233",
    appId: "1:659353722233:web:920cd403da6a1d6f4c23a8"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;