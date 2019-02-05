import React from 'react';

class RoomList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      value: '',
    };
    this.roomsRef = this.props.firebase.database().ref('Rooms');
  }

  componentDidMount() {
    this.roomsRef.on('child_added', (snapshot) => {
      const room = snapshot.val();
      room.key = snapshot.key;
      this.setState({ rooms: this.state.rooms.concat ( room ) });
    });
  }

  createRoom(event) {
    this.setState({value: event.target.value});
    this.roomsRef.push({name: event.target.value});
    event.preventDefault();
  }

render(){
  debugger
  return(
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
       <input type="text-box" value={this.state.value} onChange={this.createRoom}/>
       </label>
       <input type="submit" value="Submit"/>
     </form>
  );
}
}


export default RoomList;
