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
room_name = localStorage.getItem("room_name");

function send() {
      msg = document.getElementById("msg").value ;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0 
      });
      document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         fmid = childKey;
         md = childData;
     
      console.log(fmid);
      console.log(md);
      name1 = md['name'];
      message = md['message'];
      like = md['like'];

      nwt = "<h4> " + name1 + "<img class='user_tick' src='tick.png'></h4>";
      mwt = "<h4 class='message_h4'>" + message + "</h4>";
      lb = "<button class='btn btn-warning' id=" + fmid + "value=" + like + "onclick='updatelike(this.id);'>";
      swt = "<span class='glyphicon glyphicon-thumbs-up'> Like: " + like + "</span></button><hr>";

row = nwt +mwt + lb + swt;
document.getElementById("output").innerHTML += row;
      } });  }); }
getData();

function updatelike(mid) {
console.log("clicked on like button - " + mid);
bid = mid;
likes = document.getElementById(bid).value;
ul = Number(likes) + 1;

console.log(ul);
firebase.database().ref(room_name).child(mid).update({
      like: ul
});
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}