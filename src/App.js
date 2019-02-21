import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/roomlist'
import MessageList from './components/messagelist'


var config = {
    apiKey: "AIzaSyDuJ6Fif1B5TJUglTSrjU42NInTiRY9LhQ",
    authDomain: "bloc-chats-5f8e9.firebaseapp.com",
    databaseURL: "https://bloc-chats-5f8e9.firebaseio.com",
    projectId: "bloc-chats-5f8e9",
    storageBucket: "bloc-chats-5f8e9.appspot.com",
    messagingSenderId: "231966459458"
  };
  firebase.initializeApp(config);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.activeRoom = this.activeRoom.bind(this);
  }

  activeRoom(e) {
    
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>

        <h1>Bloc Chat</h1>

        <RoomList firebase={firebase} />
        <MessageList firebase={firebase} />
      </div>
    );
  }
}

export default App;
