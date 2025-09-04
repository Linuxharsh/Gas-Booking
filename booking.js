// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-analytics.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
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
  measurementId: "G-M2XFYF5S2E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

async function loadBookings() {
  const tableBody = document.getElementById("Booking-table");
  tableBody.innerHTML = "";

  const querysnapshot = await getDocs(collection(db, "bookings"));
  querysnapshot.forEach((doc) => {
    const data = doc.data();
    const row = `<tr>
      <td>${data.name}</td>
      <td>${data.address}</td>
      <td>${data.gasType}</td>
      <td>${data.date}</td>
    </tr>`;
    tableBody.innerHTML += row;
  });
}

loadBookings();
