import React from 'react';

class MessageList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [
        {
          username: '',
          content: '',
          sentAt: ''
        },
      ],
    };

    this.messagesRef = this.props.firebase.database().ref('Messages');
  }

  componentDidMount() {
    this.messagesRef.on('child_added', (snapshot) => {
      const message = snapshot.val();

      message.key = snapshot.key;
      this.setState({ messages: this.state.messages.concat(message) });
    });
  }

  getCurrentMessage() {
    return this.state.messages.filter(message => message.roomId === this.props.currentRoom.key);
  }

  render() {
    return (
      <div className='Active Room'>
        <h1>
          <li>{this.props.currentRoom.name}</li>
          <form>
            <label>New Message</label>
            <input type="text"></input>
            <button type="submit">Send</button>
          </form>
        </h1>
        <h2>
          <ul>
            {
              this.getCurrentMessage().map(message => (
                <li key={message.key}>{message.content}</li>
              ))
            }
          </ul>
        </h2>
      </div>
    );
  }
}

export default MessageList;
