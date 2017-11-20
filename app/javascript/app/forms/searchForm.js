import React from 'react';
import PropTypes from 'prop-types';
import {Field, reduxForm} from 'redux-form';
import DebouncedInput from '../components/debouncedInput';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
  }

  renderDebounceInput = (field) => {
    return (<DebouncedInput
      debounceTimeout = {this.props.debounceTimeout}
      onChange = {field.input.onChange}/>);
  };

  render() {
    return (
      <div>
        <label> Search:
          <Field name="searchQuery" component={this.renderDebounceInput} type="text"/>
        </label>
      </div>
    );
  }
}

SearchForm.propTypes = {
  debounceTimeout: PropTypes.number.isRequired,
};

SearchForm = reduxForm({
  form: 'search',
})(SearchForm);

export default SearchForm;
