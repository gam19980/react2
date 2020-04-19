import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';



// const firebaseConfig = {
//   apiKey: "AIzaSyBMkP-QO8ViHOI2HQaJBpOIp6S7YvFoQDY",
//   authDomain: "new-project-616da.firebaseapp.com",
//   databaseURL: "https://new-project-616da.firebaseio.com",
//   projectId: "new-project-616da",
//   storageBucket: "new-project-616da.appspot.com",
//   messagingSenderId: "816237983482",
//   appId: "1:816237983482:web:ba7a4a4a8813f6f85f3b43",
//   measurementId: "G-L4NLE295LK"
// };
// firebase.initializeApp(firebaseConfig);
// firebase.database().ref('users/010').set({

//   soname: 'Зайцева',
//   name: 'Ринния', 
//   patronymic: 'Николаевна', 
//   phone: '89144565786' 

// });


// firebase.database().ref('users/001').remove();




ReactDOM.render(<App />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
