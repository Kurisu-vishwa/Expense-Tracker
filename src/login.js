// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";
  import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
  
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

const submit = document.getElementById('login-btn');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // Sign in with Firebase Authentication
    if (!email || !password) {
        alert("Email and password are required");
        return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
    }

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("User signed in:", user);
        // Optionally, you can update the user's profile or perform other actions
        // For example, you can log the user's display name or email
        console.log("User display name:", user.displayName);
        console.log("User email:", user.email); 


        // ...
    })
    .then(() => {
        console.log("User signed in successfully:");    
        alert("User signed in successfully!");
        // Redirect to dashboard or home page
        window.location.href = "main.html"; 
    }) // Change to your dashboard page
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error signing in:", errorCode, errorMessage);
        if(errorCode === 'auth/no-user-record') {
            alert("No user found with this email. Please sign up first.");
        }
        else if(errorCode === 'auth/invalid-credential') {
            alert("Incorrect email or password. Please try again.");
        }
        else {
            alert("An error occurred during login. Please try again later.");
        }
        
    });
})
