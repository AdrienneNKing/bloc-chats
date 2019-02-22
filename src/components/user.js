import React from 'react';

class User extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      provider: ''
    };
    this.signInWithPopup = this.props.firebase.auth.GoogleAuthProvider();
  };

  signInwithPopup() {
      return const provider = new this.props.firebase.auth.GoogleAuthProvider();
  }

  render() {
    return (
    <button className='user-sign in' onClick={()=> this.props.firebase.auth().signInWithPopup( provider);}>Sign In</button>
    );
  }
}
export default User
