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
      currentRoom: {}
    };
    this.handleRoomSelect = this.handleRoomSelect.bind(this);
  }

  handleRoomSelect(room) {
    this.setState({
      currentRoom: room
    });
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>

        <h1>Bloc Chat</h1>

        <RoomList firebase={firebase} handleRoomSelect={this.handleRoomSelect} />
        <MessageList firebase={firebase} currentRoom={this.state.currentRoom} />
      </div>
    );
  }
}

export default App;
