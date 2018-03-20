//dependecias
import React, { Component } from 'react';
import PropTypes from 'prop-types';
//assets
import Header from './Global/Header'
import Content from './Global/Content'
import Footer from './Global/Footer'
//data
import items from '../data/menu'


class App extends Component {

	static PropTypes={
		children:PropTypes.object.isRequired
	}

  render() {
  	const {children}=this.props;
    return (
      <div>
        <Header title="tfg" items={ items }/>
        <Content body={children}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
