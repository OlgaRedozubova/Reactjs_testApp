import React from 'react';
import { Modal, Button, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
//import { Button } from 'react-bootstrap';

import { connect } from 'react-redux';




export default (props) => {
 /* addUserModal (text) {
    this.props.addFriend(name, 10);
  }*/
  console.log(props);
  return (
    <Modal
      {...props}
      bsSize="small"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-sm">
          Введите пользователя
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          onSubmit = {(e) => {
            e.preventDefault();
         //   addUserModal(this.textInput.value);
            this.textInput.value='';
          }}
          >


          <FormGroup controlId="formName">
            <ControlLabel>Name</ControlLabel>{' '}
            <FormControl
              type="text"
              placeholder="Jane Doe"
              inputRef={input => this.textInput = input}
              //onChange={(e)=>{console.log(e.target.value)}}
            />
          </FormGroup>{' '}
          <Button
            bsStyle="primary"
            type='submit'
            //onClick={() => {props.setUserName(this.textInput.value)}}
          >Save changes</Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}