var firebaseConfig = {
      apiKey: "AIzaSyAtBDtHqJM8lQx2UCfo2tbPKVbAzsUek-o",
      authDomain: "classtest-2e798.firebaseapp.com",
      databaseURL: "https://classtest-2e798-default-rtdb.firebaseio.com",
      projectId: "classtest-2e798",
      storageBucket: "classtest-2e798.appspot.com",
      messagingSenderId: "58750835574",
      appId: "1:58750835574:web:c86da3fff0d7af7c2bb857"
    };
    firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!!!";

function addroom()
{
room_name = document.getElementById("room_name").value ;
firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
});
localStorage.setItem("room_name" , room_name);
window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
console.log("Room_names - " + Room_names);
row = "<div class='room_name' id=" + Room_names + "onclick='redirecttoroomname(this.id)'>#" + Room_names + "</div> <hr>";
document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirecttoroomname(name)
{
console.log(name);
localStorage.setItem("room_name",name);
window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}