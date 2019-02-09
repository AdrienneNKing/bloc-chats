import React from 'react';

class RoomList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      value: ''
    };
    this.roomsRef = this.props.firebase.database().ref('Rooms');
    this.createRoom = this.createRoom.bind(this);
    this.handleChange = this.onInput.bind(this);
  }

  componentDidMount() {
    this.roomsRef.on('child_added', (snapshot) => {
      const room = snapshot.val();
      room.key = snapshot.key;
      this.setState({ rooms: this.state.rooms.concat ( room ) });
    });
  }

  var input = document.getElementByID("test");
  var msg = "";
  input.onInput = => {
    e.preventDefault();
    this.setState({ value: e.target.value});
  }
  e.target.value = msg;

  createRoom(event) {
    event.preventDefault();
    this.roomsRef.push({ value: this.state.value });
  }

render(){
  return(
    <div>
    <ul>
      {this.state.rooms.map ((room, index) =>
        <li className="roomNames" key={room.key} onClick={()=> this.props.handleRoomSelect(room.key)}>
         {room.name}
         </li>
      )}
    </ul>

     <form onSubmit={this.createRoom}>
       <label>
       Room Name:
       <input type="text" onChange={this.input.onInput} />
       </label>
       <input type="submit" value="Submit"/>
     </form>
     </div>
  );
}
}


export default RoomList;
