import React from 'react';
import PropTypes from 'prop-types';

class PlusButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header-plus-button-container">
        <div
          className="header-plus-button ripple"
          onClick={() => this.props.onClick()}>
        </div>
      </div>
    );
  }
}

PlusButton.propTypes = {
  onClick: PropTypes.func,
};

export default PlusButton;
