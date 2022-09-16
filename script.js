let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

//---Switch----

function Click() {
  var x = document.getElementById("Switch");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

//---Switch---

  const firebaseConfig = {
    apiKey: "AIzaSyBxaF4UFGhWO4F-cl4EIOyOgiu-v1rkf8E",
    authDomain: "signup-30dd1.firebaseapp.com",
    databaseURL: "https://signup-30dd1-default-rtdb.firebaseio.com",
    projectId: "signup-30dd1",
    storageBucket: "signup-30dd1.appspot.com",
    messagingSenderId: "528419005902",
    appId: "1:528419005902:web:c32cc7311eb8b88f76b79f"
  };

  firebase.initializeApp(firebaseConfig);


  var signupDB = firebase.database().ref("signup");

  document.getElementById('signup').addEventListener("submit", submitForm );

function  submitForm(e){
  e.preventDefault();

  var username = getElementByval('username');
  var password = getElementByval('password');
  var email = getElementByval('email');

  console.log(username, password, email)
}

const getElementByval = (id) => {
  return document.getElementById(id).value;

}