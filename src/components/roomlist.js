import React from 'react';


class RoomList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rooms: [] };
    this.roomsRef = this.props.firebase.database().ref('rooms');
  }

  componentDidMount() {
    this.roomsRef.on('child_added', (snapshot) => {
      debugger
      const room = snapshot.val();
      room.key = snapshot.key;
      this.setState({ rooms: this.state.rooms.concat ( room ) });
    });
  }

  render () {
    return (
      <div></div>
    )
  }

}


export default RoomList;
