import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';

export default (props) => {
  const {
    showLogo,
    handleClick,
  } = props;

  const itemNav = (item, index) => (
    <a
      href="#"
      key={index}
      className='item'
      onClick={() => handleClick(item, index)}
    >
      {item.name}
    </a>
  );

  return (
    <header className="App-header">
      <div className="leftCol">
        {
          showLogo &&
          <img src={logo} className="App-logo" alt="logo" />
        }

      </div>
      <nav className="nav">
        <NavLink to="/" exact={true} activeClassName="selected">Search, Filter, Pagination</NavLink>
        <NavLink to="/about" activeClassName="selected">Add Users</NavLink>
        <NavLink to="/friends" activeClassName="selected">Friends</NavLink>
        <NavLink to="/contacts" activeClassName="selected">Contacts</NavLink>

      </nav>
    </header>
  );
}