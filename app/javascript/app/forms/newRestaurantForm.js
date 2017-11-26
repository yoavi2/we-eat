import React from 'react';
import {Field, reduxForm} from 'redux-form';

let NewRestaurantForm = props => {

  const { handleSubmit, pristine, reset, submitting } = props

  return (
    <div className="new-restaurant-form">
      <form onSubmit={handleSubmit}>
        <div className="new-restaurant-field">
          <label>Name:
            <Field name="restaurant_name"
                   component="input"
                   type="text">
            </Field>
          </label>
        </div>
        <div className="new-restaurant-field">
          <label>Cuisine:
            <Field name="cuisine" component="select" placeholder="Cuisine">
              <option/>
              <option value="hamburger">Hamburger</option>
              <option value="cafe">Cafe</option>
              <option value="dessert">Dessert</option>
              <option value="italian">Italian</option>
              <option value="fish">Fish</option>
              <option value="vegetarian">Vegetarian</option>
              <option value="chinese">Chinese</option>
            </Field>
          </label>
        </div>
        <div className="new-restaurant-field">
          <label>Address:
            <Field
              name="address"
              component="input"
              type="text"
            />
          </label>
        </div>
        <div className="new-restaurant-field">
          <label>Delivery Speed:
            <Field
              name="deliverInMin"
              component="input"
              type="number"
              min="10" max="90"
            />
          </label>
        </div>
        <div className="new-restaurant-field">
          <label>10Bis:
            <Field
              name="isTenBis"
              component="input"
              type="checkbox"/>
          </label>
        </div>
        <div>
          <button type="submit" disabled={pristine || submitting}>
            Submit
          </button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>
            Clear Values
          </button>
        </div>
      </form>
    </div>
  );
};

NewRestaurantForm = reduxForm({
  form: 'newRestaurant',
})(NewRestaurantForm);

export default NewRestaurantForm;
