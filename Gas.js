// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-analytics.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtFPn56Y0a-g747rI5fy2kkWS4jvnndz0",
  authDomain: "gas-booking-914fb.firebaseapp.com",
  projectId: "gas-booking-914fb",
  storageBucket: "gas-booking-914fb.firebasestorage.app",
  messagingSenderId: "1065260617211",
  appId: "1:1065260617211:web:70693fe617cbbce7f08f5e",
  measurementId: "G-M2XFYF5S2E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

const bookingform = document.getElementById("bookingForm");
const message = document.getElementById("message");
bookingform.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const gastype = document.getElementById("gasType").value;
  const date = document.getElementById("date").value;

  try {
    await addDoc(collection(db, "bookings"), { name, address, gasType: gastype, date });
    message.textContent = "Booking successful!";
  } catch (error) {
    console.log("something is happening wrong", error);
    message.textContent = "Error: " + error.message;
  }
});
