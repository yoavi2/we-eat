import React from 'react';
import PropTypes from 'prop-types';

const Restaurant = ({ restaurant }) => (
  <li
    // onClick={onClick}
  >
    {restaurant.name}
  </li>
)

Restaurant.propTypes = {
  // onClick: PropTypes.func.isRequired,
  restaurant: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
};

export default Restaurant;
