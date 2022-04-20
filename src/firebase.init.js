import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB5_spql79MGwVA3Tblo3VlRwOUIYY7Iko",
    authDomain: "fir-first-time-4209c.firebaseapp.com",
    projectId: "fir-first-time-4209c",
    storageBucket: "fir-first-time-4209c.appspot.com",
    messagingSenderId: "882050586187",
    appId: "1:882050586187:web:397a78f9201bd1a8cddfce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;