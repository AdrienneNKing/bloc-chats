import React from 'react';

class MessageList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [
        {
          username: '',
          content:  '',
          sentAt:   ''
        }
      ],
      newMessage: ''
    };

    this.msgRef = this.props.firebase.database().ref('Messages');
    this.createMessage = this.createMessage.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.formatTime = this.formatTime.bind(this);
  }

  componentDidMount() {
    this.msgRef.on('child_added', snapshot => {
      const msg = snapshot.val();
      msg.key = snapshot.key;
      this.setState({messages: this.state.messages.concat(msg)});
    });
  }

  getCurrentMessage() {
    return this.state.messages.filter(message => message.roomId === this.props.currentRoom.key);
  }

  createMessage(event) {
    event.preventDefault();

    this.msgRef.push({
      content:  this.state.newMessage,
      username: this.props.user ? this.props.user.displayName : 'Guest',
      roomId:   this.props.currentRoom.key,
      sentAt:   this.props.firebase.database.ServerValue.TIMESTAMP,
    });

    this.setState({ newMessage: '' });
  }

  handleChange(event) {
    this.setState({ newMessage: event.target.value });
  }

  formatTime(time) {
    if (time){
       const date = new Date(time);
       const hour = date.getHours();
       const min = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
       const sec = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
       const newTime = hour + ':' + min + ':' + sec;
       return newTime;
     }
  }

  render() {
    return (
      <div className='Active Room'>
        <h2>
          <section className="Message-List">
            {this.getCurrentMessage().map(message => (
                  <div className="messages" key={message.key}>
                  <div>{message.username}</div>
                  <div>{message.content}</div>
                  <div>{this.formatTime(message.sentAt)}</div>
                  </div>
              ))}

          <form className="new-message" onSubmit={this.createMessage}>
          <input
            type="text"
            placeholder="New Message"
            value={this.state.newMessage}
            onChange={this.handleChange}
            />
            <input type="submit" value="Send" />
          </form>
          </section>
        </h2>
      </div>
    );
  }
}

export default MessageList;
