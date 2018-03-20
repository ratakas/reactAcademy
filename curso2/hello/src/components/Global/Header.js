//dependecias
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

//assets
import logo from './images/logo.svg';
import './css/Header.css';

class Header extends Component {
  static PropTypes={
    title:PropTypes.string.isRequired,
    items:PropTypes.array.isRequired
  };


  render() {
    const {title,items}=this.props;
    return (
      <div className="Header">
        <div className="logo">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="Title">{ title }</h2>
          <div>
            <ul className="Menu">
              { items && items.map( 
                (items, key) => <li key={key}> 
                <Link to={items.url}>{items.category}</Link> 
                </li> )}
            </ul>
          </div>

        </div>
      </div>
    );
  }
}

export default Header;
