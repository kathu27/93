
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyB3JANUA_yp9CUpiXGm2j_ECulV6XuMVos",
      authDomain: "abcd-f11dd.firebaseapp.com",
      databaseURL: "https://abcd-f11dd-default-rtdb.firebaseio.com",
      projectId: "abcd-f11dd",
      storageBucket: "abcd-f11dd.appspot.com",
      messagingSenderId: "846287020302",
      appId: "1:846287020302:web:722d3f4a58109fe9eff75f"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
