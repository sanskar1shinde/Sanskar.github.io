// assets/js/firebaseauth.js

// 1. Your Firebase Configuration - REPLACE WITH YOUR ACTUAL CONFIG!
// You get this from Firebase Console -> Project settings -> Your apps -> Web app
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the Firestore database instance
const db = firebase.firestore();

// 2. Contact Form Submission Handler
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    // Check if the form exists before adding event listener
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault(); // Prevent the default browser form submission

            // Get form data
            const name = contactForm.elements.name.value.trim();
            const email = contactForm.elements.email.value.trim();
            const message = contactForm.elements.Message.value.trim(); // 'Message' matches the 'name' attribute in HTML

            // Basic client-side validation
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

            // Send data to Firestore
            try {
                // Add document to 'contactMessages' collection
                await db.collection("contactMessages").add(formData);
                alert("Your message has been sent successfully!");
                contactForm.reset(); // Clear the form fields after successful submission
            } catch (error) {
                console.error("Error writing document to Firestore: ", error);
                alert("There was an error sending your message. Please try again later.");
            }
        });
    } else {
        console.warn("Contact form with ID 'contactForm' not found.");
    }
});