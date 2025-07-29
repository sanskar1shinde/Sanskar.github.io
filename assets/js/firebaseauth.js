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
// Initialize Firebase Authentication and get a reference to the service

// Get a reference to the Firestore database
const db = firebase.firestore();

// 2. Get a reference to your form
const contactForm = document.getElementById('contactForm');

// 3. Add an event listener for form submission
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent the default form submission (browser navigating away)

    // Get form data
    const name = contactForm.elements.name.value;
    const email = contactForm.elements.email.value;
    const message = contactForm.elements.Message.value; // 'Message' matches the 'name' attribute in HTML

    // Simple validation (you can add more robust validation here)
    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
    }

    // Prepare data for Firestore
    const formData = {
        name: name,
        email: email,
        message: message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp() // Adds a server-generated timestamp
    };

    // 4. Send data to Firestore
    try {
        await db.collection("contactMessages").add(formData);
        alert("Your message has been sent successfully!");
        contactForm.reset(); // Clear the form fields
    } catch (error) {
        console.error("Error writing document to Firestore: ", error);
        alert("There was an error sending your message. Please try again later.");
    }
});