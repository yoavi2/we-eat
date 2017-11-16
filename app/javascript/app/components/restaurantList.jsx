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
      <div className="content-drawer restaurant-list">
        {this.props.restaurants.map(restaurant => (
          <Restaurant
            key={restaurant.id} restaurant={restaurant} />
            // onClick={() => onRestaurantClick(restaurant.id)} /> // TODO: Implement a click later on
        ))}
      </div>
    );
  }
}

RestaurantList.propTypes = {
  restaurants: PropTypes.arrayOf(
    restaurantPropType
  ),
};

export default RestaurantList;
