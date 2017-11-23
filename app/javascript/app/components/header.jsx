import React from 'react';
import Search from './search';
import PlusButton from './plusButton';
import { Route } from 'react-router-dom';

class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  handleClick(history) {
    console.log("clicked!");
    history.push('/new');
  }

  render() {
    return (
      <div className="app-header">
        <Route
          render={({ history }) => (
            <PlusButton onClick={() => this.handleClick(history)}/>
          )}/>
        <Search/>
        <div className="header-dummy">
        </div>
      </div>
    );
  }
}

export default Header;

