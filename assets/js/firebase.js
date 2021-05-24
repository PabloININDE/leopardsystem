
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwBCOYHBpK5evyqyik7qYpSr1819Q01Do",
  authDomain: "leopardsystem-7ef60.firebaseapp.com",
  databaseURL: "https://leopardsystem-7ef60-default-rtdb.firebaseio.com",
  projectId: "leopardsystem-7ef60",
  storageBucket: "leopardsystem-7ef60.appspot.com",
  messagingSenderId: "966504066545",
  appId: "1:966504066545:web:684dd9e44f8973ec44e850",
  measurementId: "G-N1N3YK41RP"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore()

// Variable to acces database collection
const db = firestore.collection("Usuarios")

// get submit form 
let submitButton = document.getElementById('submit')

// Create event listener to allow form submision
submitButton.addEventListener ('click', (e) => {
  //prevent default form submission behavior
  e.preventDefault()

  
// get form values 

let Telefono = document.getElementById('Tel').value
let Nombre = document.getElementById('name').value
let Email = document.getElementById('email').value
let Asunto = document.getElementById('subject').value
let Mensaje = document.getElementById('mensaje').value

// save from data to firebase

db.doc().set({
  Tel: Telefono,
  name: Nombre,
  email: Email,
  subject: Asunto,
  mensaje: Mensaje
}).then(() => {
  
  console.log('data guardada')
}).catch((error) => {
  console.log(error)
})

//alert

alert('Tu informacion a sido enviada de manera exitosa')


})

