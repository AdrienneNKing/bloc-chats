import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/roomlist'
import MessageList from './components/messagelist'
import User from './components/user'


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
      currentRoom: {},
      user: null,
    };
    this.handleRoomSelect = this.handleRoomSelect.bind(this);
    this.setUserName = this.setUserName.bind(this);
  }

  handleRoomSelect(room) {
    this.setState({
      currentRoom: room
    });
  }

  setUserName(user) {
    this.setState({
      user: user,
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>

        <h1>Bloc Chat</h1>

        <RoomList firebase={firebase} handleRoomSelect={this.handleRoomSelect} />
        <MessageList firebase={firebase} currentRoom={this.state.currentRoom} user={this.state.user}/>
        <User firebase={firebase} user={this.state.user} setUserName={this.setUserName} />
      </div>
    );
  }
}

export default App;
