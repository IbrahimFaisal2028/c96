const firebaseConfig = {
    apiKey: "AIzaSyA6H8ulh-fNn5DS-3QIKjtWBIl7EPmulA0",
    authDomain: "letschat-7d3f1.firebaseapp.com",
    databaseURL: "https://letschat-7d3f1-default-rtdb.firebaseio.com",
    projectId: "letschat-7d3f1",
    storageBucket: "letschat-7d3f1.appspot.com",
    messagingSenderId: "585129117539",
    appId: "1:585129117539:web:836cc560d060b78e70f556"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   user_name = localStorage.getItem("user_name");
   room_name = localStorage.getItem("room_name");
   function send()
{
    msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
      like:0
      });
      document.getElementById("msg").value = "";
}
