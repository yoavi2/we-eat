import React from 'react';
import restaurantPropType from '../propTypes/restaurant';
import Rating from './rating';
import TenBisIcon from './tenBisIcon';

const Restaurant = ({ restaurant }) => (
  <div
    className="restaurant-item"
    // onClick={onClick}
  >
    <h2> {restaurant.name} </h2>
    <Rating rating={restaurant.rating} maxRating={3} />
    <TenBisIcon isTenBis={restaurant.is_10_bis}/>

  </div>
);

Restaurant.propTypes = {
  // onClick: PropTypes.func,
  restaurant: restaurantPropType,
};

export default Restaurant;
