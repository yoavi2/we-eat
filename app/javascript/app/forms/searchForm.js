import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {DebounceInput} from 'react-debounce-input';

let SearchForm = (props) => {

  const renderDebounceInput = (field) => {
    return (<DebounceInput debounceTimeout={props.debounceTimeout}
                           onChange={field.input.onChange}/>);
  };

  return (
    <div>
      <label> Search
        <Field
          name="searchQuery"
          component={renderDebounceInput}
          type="text"/>
      </label>
    </div>
  );
};

SearchForm = reduxForm({
  form: 'search',
})(SearchForm);

export default SearchForm;
