import React, { Component } from 'react';
import MessageList from './components/MessageList';
import MessageBox from './components/MessageBox';
import Header from './components/Header';
import firebase from 'firebase';


class App extends Component {

  constructor(props){
    super(props);
    firebase.initializeApp({
      apiKey: "AIzaSyBMkP-QO8ViHOI2HQaJBpOIp6S7YvFoQDY",
      authDomain: "new-project-616da.firebaseapp.com",
      databaseURL: "https://new-project-616da.firebaseio.com",
      projectId: "new-project-616da",
      storageBucket: "new-project-616da.appspot.com",
      messagingSenderId: "816237983482",
      appId: "1:816237983482:web:ba7a4a4a8813f6f85f3b43",
      measurementId: "G-L4NLE295LK"
    });
  }

  render(){
    return (
      <div className="container">
            <div className="columns">
              <div className="column is-3"></div>
              <div className="column is-6">
                <h1 className="title">Телефонный справочник</h1>
                <MessageList db={firebase} />
              </div>
            </div>
            <div className="columns">
              <div className="column is-3"></div>
              <div className="column is-6">
                <MessageBox db={firebase} />
              </div>
            </div>
        </div>
    )
  }
}

export default App;