importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-messaging.js");
firebase.initializeApp({

// apiKey: "AIzaSyCRwh7vo6Jw7_WTmX-eR0v-b3u3xRK3UjA",
// authDomain: "react-firebase-messaging.firebaseapp.com",
// databaseURL: "https://react-firebase-messaging.firebaseio.com",
// projectId: "react-firebase-messaging",
// storageBucket: "",
messagingSenderId: "329966341244",
// appId: "1:302441557166:web:b4f66399558397e7"
});
const messaging = firebase.messaging();


self.addEventListener("push", async event => {
  console.log("check", event.data.json().data);
  clients
    .matchAll({
      type: "window",
      includeUncontrolled: true
    })
    .then(windowClients => {
      for (let i = 0; i < windowClients.length; i++) {
        const windowClient = windowClients[i];
        windowClient.postMessage(event.data.json().data);
      }
      
    })
});



messaging.setBackgroundMessageHandler(function(payload) {
  return registration.showNotification("my notification title"); 
  
});

self.addEventListener('notificationclick', function(event) {
  
  // 
});