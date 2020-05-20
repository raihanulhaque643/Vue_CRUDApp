import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCEA8YMsNL5gyOIh6oml8DLj5PXs6x__Gg",
    authDomain: "vue-ninja-smoothies-9d5e3.firebaseapp.com",
    databaseURL: "https://vue-ninja-smoothies-9d5e3.firebaseio.com",
    projectId: "vue-ninja-smoothies-9d5e3",
    storageBucket: "vue-ninja-smoothies-9d5e3.appspot.com",
    messagingSenderId: "716751023841",
    appId: "1:716751023841:web:c2e1181ed132e490b691a0"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);


  // export firestore database
  export default firebaseApp.firestore()