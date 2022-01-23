//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
  apiKey: "AIzaSyB3Mw2Np_Ru7ZFAhWUW3suh1BO9-n4dgEY",
  authDomain: "kwitter-2-cd9c3.firebaseapp.com",
  projectId: "kwitter-2-cd9c3",
  storageBucket: "kwitter-2-cd9c3.appspot.com",
  messagingSenderId: "93713210016",
  appId: "1:93713210016:web:e16ca0d7ac496f6a0e87c5"
};
  firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
 function removeuser() {
 }
    //End code
    });});}
getData();
