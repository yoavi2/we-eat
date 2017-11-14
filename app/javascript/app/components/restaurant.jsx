import React from 'react';
import restaurantPropType from '../propTypes/restaurant';

const Restaurant = ({ restaurant }) => (
  <li
    // onClick={onClick}
  >
    {restaurant.name}
  </li>
);

Restaurant.propTypes = {
  // onClick: PropTypes.func,
  restaurant: restaurantPropType,
};

export default Restaurant;
