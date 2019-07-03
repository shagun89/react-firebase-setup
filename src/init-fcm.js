import * as firebase from "firebase/app";
import "firebase/messaging";
const initializedFirebaseApp = firebase.initializeApp({
// Project Settings => Add Firebase to your web app
  messagingSenderId: "302441557166"
});
const messaging = initializedFirebaseApp.messaging();
messaging.usePublicVapidKey(
// Project Settings => Cloud Messaging => Web Push certificates
  "BFEf8RYqO92vFH-cTnMQxNG6KG975ltW3m3YwbPbmv5s2rQdvHuKO97ABfYgp7zmpdrdeuP15FNT6IOuzuZxQJM"
);
export { messaging };



// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/6.2.4/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#config-web-app -->

// <script>
//   // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyCRwh7vo6Jw7_WTmX-eR0v-b3u3xRK3UjA",
//     authDomain: "react-firebase-messaging.firebaseapp.com",
//     databaseURL: "https://react-firebase-messaging.firebaseio.com",
//     projectId: "react-firebase-messaging",
//     storageBucket: "",
//     messagingSenderId: "302441557166",
//     appId: "1:302441557166:web:b4f66399558397e7"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
// </script>