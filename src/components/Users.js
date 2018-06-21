import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Users extends Component {

  render() {
    let users = this.props.users.map(function(e){
      return <li> {e.userName} </li>
    })
    return (
      <div>
        <ul>
          {users}
        </ul>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
<<<<<<< HEAD
  return { users: state.users,
          primaryUser: state.users[0]}
=======
  return { users: state.users }
>>>>>>> 29d7ac8f2848273cebcf654d7f0a2f5549308567
}
export const ConnectedUsers = connect(mapStateToProps)(Users) // aren't we supposed to be connecting something around here?
