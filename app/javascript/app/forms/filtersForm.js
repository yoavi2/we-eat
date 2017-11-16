import React from 'react';
import {Field, reduxForm} from 'redux-form';

let FiltersForm = () => {

  return (
    <div>
      <label>Cuisine</label>
      <div>
        <Field name="cuisine" component="select">
          <option/>
          <option value="Fast food">Fast food</option>
          <option value="Healthy">Healthy</option>
          <option value="Chinese">Chinese</option>
        </Field>
        <div>
          <label>Minimum rating</label>
          <Field name="minRating" component="select">
            <option/>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </Field>
        </div>
        <div>
          <label>Speed: </label>
          <div>
            <Field
              name="maxDeliverInMin"
              component="input"
              type="range"
              min="10" max="90"
              placeholder="Minutes to deliver"
            />
          </div>
        </div>
        <div>
          <label>Only TenBis: </label>
          <div>
            <Field
              name="isTenBis"
              component="input"
              type="checkbox">
            </Field>
          </div>
        </div>
      </div>
    </div>
  );
};

FiltersForm = reduxForm({
  form: 'filters',
})(FiltersForm);

export default FiltersForm;
