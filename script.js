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














  const firebaseConfig = {
    apiKey: "AIzaSyD_KTdprmxi_MdcUcTJHjyFhxPlbn7nRrk",
    authDomain: "fir-f0ba6.firebaseapp.com",
    databaseURL: "https://fir-f0ba6-default-rtdb.firebaseio.com",
    projectId: "fir-f0ba6",
    storageBucket: "fir-f0ba6.appspot.com",
    messagingSenderId: "591700204330",
    appId: "1:591700204330:web:60d93fd73e4e27de201c53"
  };

  firebase.initializeApp(firebaseConfig);

  
  var youtubeDB = firebase.database().ref("youtube");

  document.getElementById('signup').addEventListener("submit", submitForm );

function  submitForm(e){
  e.preventdefault();

  var username = getElementByval('username');
  var password = getElementByval('password');
  var email = getElementByval('email');

  console.log(username, password, email)
}

const getElementByval = (id) => {
  return document.getElementById(id).value;

}