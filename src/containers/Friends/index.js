import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as types from "../../constants/ActionTypes";
import { Modal, Button, Form, FormGroup, FormControl, ControlLabel, Col } from 'react-bootstrap';


class Friends extends Component {
  constructor (props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state ={
      friends: null,
      show: false
    }
  }
  addFriend = () => {
    this.props.addFriend(this.friendInputName.value, 15, '');
  };

  addFriendModal = (name, age, phone) => {
    this.props.addFriend(name, age, phone);
  };
  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    console.log('-------', this.props.friends);
    return (
      <div>
        Friends

        <input
          type='text'
          ref = {(input) => {this.friendInputName = input;}}
        />
        <button onClick={this.addFriend}>
          AddUser
        </button>

        <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
          Add modal
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose} >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-sm">
              Введите пользователя
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form horizontal
              onSubmit = {(e) => {
                e.preventDefault();
                //addUserModal(this.textInput.value);
                this.addFriendModal(this.nameInput.value, this.ageInput.value, this.phoneInput.value);
                this.nameInput.value='';
                this.ageInput.value='';
                this.phoneInput.value='';
              }}
            >


            <FormGroup controlId="formHorizontalName">
              <Col componentClass={ControlLabel} sm={2}>
                Name
              </Col>
              <Col sm={10}>
                <FormControl
                  type="text"
                  placeholder="Enter Name"
                  inputRef={input => this.nameInput = input}
                />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalAge">
              <Col componentClass={ControlLabel} sm={2}>
                Age
              </Col>
              <Col sm={2}>
                <FormControl
                  type="text"
                  placeholder="Age"
                  inputRef={input => this.ageInput = input}
                />
              </Col>
            </FormGroup>
            <FormGroup controlId="formHorizontalPhone">
              <Col componentClass={ControlLabel} sm={2}>
                Phone
              </Col>
              <Col sm={4}>
                <FormControl
                  type="text"
                  placeholder="Phone"
                  inputRef={input => this.phoneInput = input}
                />
              </Col>
            </FormGroup>


              <Button
                bsStyle="primary"
                type='submit'
              >Add</Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>



        <div className='wrapFriends'>
          {
            this.props.friends.map((item, index) => {
              return(
                <p key={index}>{item.name} {item.age} {item.phone}</p>
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
    friends: state.friends,
  }),
  dispatch => ({
    addFriend: (friendName, friendAge, friendPhone) => {
      dispatch(
        {
          type:types.ADD_FRIEND,
          friendName: friendName,
          friendAge: friendAge,
          friendPhone: friendPhone,
        })
    }
  })
)(Friends);

//export default Friends;