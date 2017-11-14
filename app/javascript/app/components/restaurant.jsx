import React from 'react';
import restaurantPropType from '../propTypes/restaurant';
import Rating from './rating';

const Restaurant = ({ restaurant }) => (
  <div
    className="restaurant-item"
    // onClick={onClick}
  >
    <h2> {restaurant.name} </h2>
    <Rating rating={restaurant.rating} maxRating={3} />
  </div>
);

Restaurant.propTypes = {
  // onClick: PropTypes.func,
  restaurant: restaurantPropType,
};

export default Restaurant;
