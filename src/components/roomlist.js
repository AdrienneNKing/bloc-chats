import React from 'react';

class RoomList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      newRoomName: ''
    };
    this.roomsRef = this.props.firebase.database().ref('Rooms');
    this.createRoom = this.createRoom.bind(this);
    this.onInput = this.onInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.roomsRef.on('child_added', (snapshot) => {
      const room = snapshot.val();
      room.key = snapshot.key;
      this.setState({ rooms: this.state.rooms.concat ( room ) });
    });
  }


  onInput(e) {
    var input = document.getElementByID("test");
    var msg = "";
    e.preventDefault();
    this.setState({ newRoomName: e.target.value});

  }

  handleChange(e) {
    this.setState({ newRoomName: e.target.value});

  }

  createRoom(e) {
    e.preventDefault();
    this.roomsRef.push({ name: this.state.newRoomName});
    this.setState({
      newRoomName: ''
    });
  }

render(){
  return(
    <div>
      <ul>
        {this.state.rooms.map ((room, index) =>
          <li className="roomNames" key={room.key} onClick={()=> this.props.handleRoomSelect(room)}>
           {room.name}
           </li>
        )}
      </ul>

       <form onSubmit={this.createRoom}>
         <label>
         Room Name:
         <input
         type="text"
         value={this.state.newRoomName}
         onChange={this.handleChange}
         />
         </label>
         <input
         type="submit"
         value="Submit"
         onSubmit={this.state.deleteRoomName}
         />
       </form>
     </div>
  );
}
}


export default RoomList;
