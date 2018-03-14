import React, { Component } from 'react';

import { connect } from 'react-redux';

import {
  Dropdown,
  ActiveUser,
} from '../../components';


const listDropdown = [
  {
    name: 'Name1',
  },
  {
    name: 'Name2',
  },
];

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: listDropdown,
      activeUser: null,
      show: false,
    };
  }

  isContentDropdown = (item, index) => {
    //происходит именно копирование всех свойств, а не ссылки на массив
    const users = [...this.state.users];

    users[index].isOpen = !users[index].isOpen;

    this.setState({
      users, //равнозначно user:this.state.users,
    });
  };

  addUser = () => {
    console.log('Add USER click', this.userInput.value);
    this.props.addUser(this.userInput.value, 1, '555');
    this.userInput.value = '';
  };

  addUserModal = (name, age, phone) => {
    this.props.addUser(name, age, phone);
  };
  handleShow = () => {
    this.setState({
      show: true,
    });
  };
  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  render() {

    const {
      isModal,
    } = this.state;

     return (
      <div className='about'>
        <div className="about__header">
          <h1>Add Users</h1>
        </div>
        <div className="about__content">
          <div className="about__left">
            <div className="about__sidebar">
              <ActiveUser
                activeUser={this.state.activeUser}
              />
            </div>
            <div className="about__wrapDropDown">


              {
                listDropdown.map((item, index) => {
                  return (
                    <Dropdown
                      key={index}
                      isOpenDropdown={item.isOpen}
                      isContentDropdown={() => this.isContentDropdown(item, index)}
                      title='Dropdown'
                    />
                  );
                })
              }
            </div>
          </div>
          <div className='about__wrapUsers'>
            <div className="usersHeader">
              <input type='text' ref={(input) => {this.userInput = input}}/>
              <button onClick={this.addUser}>
                Add user
              </button>
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={this.handleShow}
              >
                Add modal
              </button>

              {this.state.show &&

                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                            this.addUserModal(this.userName.value, this.userAge.value, this.userPhone.value);
                            this.userName.value='';
                            this.userAge.value='';
                            this.userPhone.value='';
                          }}
                        >

                          <div className="form-group row">
                            <label htmlFor="inputName"
                                   className="col-sm-2 col-form-label">Name</label>
                            <div className="col-sm-10">
                              <input type="text" className="form-control"
                                     id="inputName"
                                     placeholder="Enter Name"
                                     ref={input => this.userName = input}
                              />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label htmlFor="inputAge" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-2">
                              <input type="text" className="form-control" id="inputAge"
                                     placeholder="Age"
                                     ref={input => this.userAge = input}/>
                            </div>
                          </div>
                          <div className="form-group row">
                            <label htmlFor="inputPhone" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                              <input type="text" className="form-control" id="inputPhone"
                                     placeholder="Phone"
                                     ref={input => this.userPhone = input}
                              />
                            </div>
                          </div>
                          <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                      </div>
                      <div className="modal-footer">
                        <button type="button"
                                className="btn btn-secondary"
                                onClick={this.handleClose}
                                data-dismiss="modal">
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                      </div>
                    </div>
                  </div>
                </div>

              }

            </div>
            <div className='usersList'>
              <div className="usersList__head">
                <div className='avatar'>
                  <p>Avatar:</p>
                </div>
                <div>
                  <p>Name:</p>
                </div>
                <div>
                  <p>Age:</p>
                </div>
                <div>
                  <p>Phone:</p>
                </div>
              </div>

            {
              this.props.users.map((item, index) => {
                return(
                  <div key={index} className="itemUser">
                    <div className="itemUser__image">
                      <img src='#' alt=""/>
                    </div>
                    <div>
                      <p>{item.name}</p>
                    </div>
                    <div>
                      <p>{item.age}</p>
                    </div>
                    <div>
                      <p>{item.phone}</p>
                    </div>
                  </div>
                )
              })
            }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//export default About;

export default connect (
  state => ({
    users:state.users,
  }),
  dispatch => ({
      addUser: (userName, userAge, userPhone) => {
        dispatch(
          {
            type:'ADD_USER',
            userName: userName,
            userAge: userAge,
            userPhone: userPhone,
          })
      },
    }
  )
)(About);