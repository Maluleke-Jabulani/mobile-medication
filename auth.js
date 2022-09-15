const firebaseApp = firebase.intializeApp({
    apiKey: "AIzaSyD_-T4i8vzlH6t99FvlWVfndZwj6pLjkJw",
    authDomain: "signup-14e46.firebaseapp.com",
    projectId: "signup-14e46",
    storageBucket: "signup-14e46.appspot.com",
    messagingSenderId: "1067802475479",
    appId: "1:1067802475479:web:d860983610630cd8986992"

});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

const register = () => {
    const email= document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.createUserWithEmailAndPassword(email, password).then((res) => {
        console.log(res.user)
    })
    .catch((err) => {
        console.log(err.code)
        console.log(err.message)
    })
  }
  