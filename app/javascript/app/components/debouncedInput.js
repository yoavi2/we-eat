import React, { Component } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';

class DebouncedInput extends Component {

  constructor(props){
    super(props)
    this.state = {
      value: props.value,
    }
    // Debounce the passed in dispatch method
    this.onChange = debounce(this.props.onChange, this.props.debounceTimeout);
  }

  handleChange = e => {
    // React event weirdness requires storing
    // the synthetic event
    const val = e.target.value;
    this.setState({ value: val }, () => {
      this.onChange(val);
    });
  }

  render() {
    return (
      <input type="text" onChange={this.handleChange} value={this.props.value} />
    );
  }
}

DebouncedInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  debounceTimeout: PropTypes.number.isRequired,
};

export default DebouncedInput;
