import React from 'react';
import {Field, reduxForm} from 'redux-form';

let FiltersForm = () => {

  return (
    <div className="app-filters">
      <div className="filter">
        <label>Cuisine:
          <Field name="cuisine" component="select">
            <option/>
            <option value="Fast food">Fast food</option>
            <option value="Healthy">Healthy</option>
            <option value="Chinese">Chinese</option>
          </Field>
        </label>
      </div>
      <div className="filter">
        <label>Minimum rating:
          <Field name="minRating" component="select">
            <option/>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </Field>
        </label>
      </div>
      <div className="filter">
        <label>Speed (Min):
          <Field
            name="maxDeliverInMin"
            component="input"
            type="number"
            min="10" max="90"
          />
        </label>
      </div>
      <div className="filter">
        <label>Only 10Bis:
          <Field
            name="isTenBis"
            component="input"
            type="checkbox"/>
        </label>
      </div>
    </div>
  );
};

FiltersForm = reduxForm({
  form: 'filters',
})(FiltersForm);

export default FiltersForm;
