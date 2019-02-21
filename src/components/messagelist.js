import React from 'react';

class MessageList extends React.Component{

  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.roomsRef.on('child_added', (snapshot) => {
      const room = snapshot.val();
      room.key = snapshot.key;
      this.setState({ rooms: this.state.rooms.concat ( room ) });
    });
  }

  
}

export default MessageList;
