import React from 'react';
import PropTypes from 'prop-types';
import Restaurant from './restaurant';
import restaurantPropType from '../propTypes/restaurant';

class RestaurantList extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <ul>
        {this.props.restaurants.map(restaurant => (
          <Restaurant
            key={restaurant.id} restaurant={restaurant} />
            // onClick={() => onRestaurantClick(restaurant.id)} /> // TODO: Implemnt a click later on
        ))}
      </ul>
    );
  }
}

RestaurantList.propTypes = {
  restaurants: PropTypes.arrayOf(
    restaurantPropType
  ),
};

export default RestaurantList;
