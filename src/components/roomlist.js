import React from 'react';


class RoomList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rooms: [] };
    this.roomsRef = this.props.firebase.database().ref('Rooms');
  }

  componentDidMount() {
    this.roomsRef.on('child_added', (snapshot) => {
      const room = snapshot.val();
      room.key = snapshot.key;
      this.setState({ rooms: this.state.rooms.concat ( room ) });
    });
  }

  render () {
    return (<ul>
      {this.state.rooms.map ((room, index) =>
        <li className="roomNames" key={room.key} onClick={()=> this.props.handleRoomSelect(room.key)}>
         {room.name}
         </li>
      )}
    </ul>);
  }

}


export default RoomList;
