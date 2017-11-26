import React from 'react';
import NewRestaurantForm from '../forms/newRestaurantForm';
import {createRestaurant} from '../actions/restaurantActions';
// import {Values} from '../../../../node_modules/redux-form/es/types';


class NewRestaurant extends React.Component {
  constructor(props) {
    super(props);
  }

  handleFormSubmit = (values, dispatch) => {
    console.log("new restaurant form submitted");
    dispatch(createRestaurant(values));
  }

  render() {
    return (
      <div className="new-restaurant">
        <NewRestaurantForm onSubmit={this.handleFormSubmit}/>
      </div>
  );
  }
}

export default NewRestaurant;
