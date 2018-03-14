import React, { Component } from 'react';

import { connect } from 'react-redux';


class UsersPage extends Component {
  addUser = () => {
    this.props.addUser(this.userInputName.value);
    this.userInputName.value = '';
  };
  render () {
    const users = [...this.props.users];
    return (
      <div className="users">
        <input
          type='text'
          ref = {(input) => {this.userInputName = input;}}
        />
        <button onClick={this.addUser}>
          AddUser
        </button>
        Users
        <div className='wrapUsers'>
          {
            users.map((item, index) => {
              return(
                <p key={index}>{item.name} {item.age}</p>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    users: state.users,
  }),
  dispatch => ({
      addUser: (userName) => {
        dispatch(
          {
            type:'ADD_USER',
            userName: userName
          })
      }
    })
)(UsersPage);