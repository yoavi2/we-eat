import React from 'react';
import Search from './search';
import PlusButton from './plusButton';
import {store} from '../store';
import {push} from 'react-router-redux';

class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  handleClick = () => {
    console.log('Clicked');
    store.dispatch(push('/new'));
  }

  render() {
    return (
      <div className="app-header">
        <PlusButton onClick={this.handleClick}/>
        <Search/>
        <div className="header-dummy">
        </div>
      </div>
    );
  }
}

export default Header;

