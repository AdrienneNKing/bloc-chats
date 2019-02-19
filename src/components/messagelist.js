import React from 'react';

componentDidMount() {
  this.roomsRef.on('child_added', (snapshot) => {
    const room = snapshot.val();
    room.key = snapshot.key;
    this.setState({ rooms: this.state.rooms.concat ( room ) });
  });
}
