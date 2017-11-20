import React from 'react';
import {Field, reduxForm} from 'redux-form';
import DebouncedInput from '../components/debouncedInput';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    // this.onChange = this.onChange.bind(this);
    // this.debouncedOnChange = debounce(this.onChange, 1000);
  }

  renderDebounceInput = (field) => {
    return (<DebouncedInput
      debounceTimeout = {this.props.debounceTimeout}
      onChange = {field.input.onChange}/>);
  };


  // onChange(event, newValue, previousValue) {
  //
  // }

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

SearchForm = reduxForm({
  form: 'search',
})(SearchForm);

export default SearchForm;
