// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCX0bx54yQjRH4A-W3scvoUyWUD6ViQR94",
    authDomain: "sanskarshinde-66b04.firebaseapp.com",
    projectId: "sanskarshinde-66b04",
    storageBucket: "sanskarshinde-66b04.firebasestorage.app",
    messagingSenderId: "822114651542",
    appId: "1:822114651542:web:32522956432e2e5ee7a1b7",
    measurementId: "G-2FZ6SFXFZX"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);