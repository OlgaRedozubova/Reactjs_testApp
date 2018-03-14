import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './assets/style/App.css';

import Header from './components/Header';
import HomePage from "./containers/HomePage/index";
import About from "./containers/About/index";
import UsersPage from "./containers/UsersPage/";
import Friends from "./containers/Friends/";
import Contacts from "./containers/Contacts/";


class App extends Component {
  render() {
    const navList = [
      {
        name: 'Home',
      },
      {
        name: 'About',
      },
      {
        name: 'UsersPage',
      },
      {
        name: 'Friends',
      },
      {
        name: 'Contacts',
      },
    ];
    return (
      <Router>
        <div className='App'>
          <Header
            showLogo
            title='HomePage'
            navList={navList}
            handleClick={this.handleClickHeader}
          />
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={About} />
          <Route path="/friends" component={Friends}/>
          <Route path="/contacts" component={Contacts}/>

        </div>
      </Router>
    );
  }
}

export default App;
