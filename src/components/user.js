import React from 'react';

class User extends React.Component {

  constructor(props) {
    super(props);
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  componentDidMount() {
    this.props.firebase.auth().onAuthStateChanged((user) => {
      this.props.setUserName(user);
    });
  }

  signIn() {
    const provider = new this.props.firebase.auth.GoogleAuthProvider();
    this.props.firebase.auth().signInWithPopup(provider);
  }

  signOut() {
    this.props.firebase.auth().signOut(); 
  }


  render() {
    return (
      <div>
        <section className="user">
          <button
            type="button"
            className="user-sign-in"
            onClick={this.signIn}
          >
          Sign In
          </button>
          <button
            type="button"
            className="user-sign-out"
            onClick={this.signOut}>
            Sign Out
            </button>
            </section>
            <section>
              Current User:
              {this.props.user ? this.props.user.displayName : 'Guest'}
            </section>
      </div>
    );
  }
}
export default User
