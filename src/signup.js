// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB_XzG2ppcBJhy1wTsBXXTpQfjSiNo6wAQ",
    authDomain: "expense-tracker-2eb42.firebaseapp.com",
    projectId: "expense-tracker-2eb42",
    storageBucket: "expense-tracker-2eb42.firebasestorage.app",
    messagingSenderId: "667545360949",
    appId: "1:667545360949:web:85e0fe9fc58d83c53def7c",
    measurementId: "G-TLCDF7N14R"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const submit = document.getElementById('submitt-btn');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }   
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            return updateProfile(user,{displayName: username});
        }) 
        .then(() => {       
            console.log("User created successfully:");
            alert("User created successfully!");
            // Redirect to login page or dashboard
            window.location.href = "index.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Error creating user:", errorCode, errorMessage);
            alert("Error creating user: " + errorMessage);
        });
});
  
