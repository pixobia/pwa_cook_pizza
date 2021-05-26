// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
let firebaseConfig = {
    apiKey: "AIzaSyBrKSryFJhsu6tz4XeUSYDYjDwvKnfRIyk",
    authDomain: "pwa-cook-pizza.firebaseapp.com",
    projectId: "pwa-cook-pizza",
    storageBucket: "pwa-cook-pizza.appspot.com",
    messagingSenderId: "4077784197",
    appId: "1:4077784197:web:87999e9d9abadf63156dec",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();
