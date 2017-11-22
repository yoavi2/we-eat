import React from 'react';
import Search from './search';
import PlusButton from './plusButton';


class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  handleClick() {
    console.log("Clicked!");
  }

  render() {
    return (
      <div className="app-header">
        <PlusButton onClick={() => this.handleClick()}/>
        <Search/>
        <div className="header-dummy">
        </div>
      </div>
    );
  }
}

export default Header;

