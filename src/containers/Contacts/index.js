import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as contactAction from '../../actions/contactAction';

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: null,
      name: '',
      showError: false,
      isSearch:false,
      iSearch:0,
    };
  }

  addContact = () => {
    this.props.addContact(this.contactInput.value);
    this.contactInput.value = '';
  };


  handleChange = (e) => {
    if (e.target.value.length > 0) {
      this.setState({
        name: e.target.value,
        showError:false,
      })
    }else {
    this.setState({
      name: e.target.value,
    })}
  };

  addSearch =(contactName) => {
    this.props.contacts.map((item, i)=>
    {
      if (item.name === contactName){
        alert('Контакт с таким наименованием уже существует!');
        this.setState({
          isSearch:true,
          iSearch:i,
        })
      }
    }
    )
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let contact = {
      name: this.state.name
    };
     if(contact.name.length>0) {
       this.addSearch(contact.name);

       console.log('iSearch',this.state.iSearch);
       console.log('Search',this.state.isSearch);
         this.setState({
           name: '',
           showError: false,
         });
         this.props.createContact(contact);

   }else
   {
    // alert('Enter Name!');
     this.setState({
       showError: true,
     })
   }
  };

  listView = (contact, i) => {
    return (
      <div key={i} className='contact row'>
        <div className='col-md-10'>
          <p className="contact__name">
            {contact.name}
          </p>
        </div>
        <div className='col-md-2'>
          <button
            onClick={() => this.props.deleteContact(i)}
            className='btn btn-danger btn-sm'>
            Remove
          </button>
        </div>
      </div>
    );
  };

  ErrorClose = () => {
    this.setState({
      showError: false,
    });
  };

  render() {
    console.log(this.props);
    return (
      <div className='contacts'>
        <div className="contacts__content">
          <div className="wrapForm">
            <div className="wrapForm__header">
              <h3>Contacts </h3>
            </div>
            <form
              className='form-inline'
              onSubmit={this.handleSubmit}
            >
              {
                this.state.showError &&
                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                  <strong>Внимание!</strong> Не заполненно наименование.
                  <button
                    type="button"
                    className="close"
                    data-dismiss="alert"
                    aria-label="Close"
                    onClick={this.ErrorClose}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              }
                <input
                  type="text"
                  value={this.state.name}
                  className='form-control contacts__input'
                  placeholder='Add Contact'
                  onChange={this.handleChange}
                />



              <button
                type="submit"
                className="btn btn-success"
              >
                <i className='fa fa-user-plus'></i>
                <p className='btnName'>Add contact</p>
              </button>
            </form>
          </div>
          <div className="list-group">
            {
              this.props.contacts.length > 0 &&
              this.props.contacts.map((contact, i)=>
                this.listView(contact, i)
              ) || <div>Not found contacts</div>
            }
          </div>
        </div>
      </div>
    );
  }
};


const mapStateToProps =(state) => {
  return {
    contacts: state.contacts,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createContact: contact => dispatch(contactAction.createContact(contact)),
    deleteContact: index => dispatch(contactAction.deleteContact(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);

