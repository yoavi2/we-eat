import React from 'react';
import PropTypes from 'prop-types';
import Restaurant from './restaurant';
import restaurantPropType from '../propTypes/restaurant';

class RestaurantList extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    if (this.props.restaurants.length === 0) {
      return <EmptyRestaurants/>;
    }
    return <ExistingRestaurants restaurants={this.props.restaurants}/>;
  }
}

function EmptyRestaurants() {
  return (
    <div className="content-drawer restaurant-message">
      No matching restaurants
    </div>
  );
}

function ExistingRestaurants(props) {
  return (
    <div className="content-drawer restaurant-list">
      {props.restaurants.map(restaurant => (
        <Restaurant
          key={restaurant.id} restaurant={restaurant}/>
        // onClick={() => onRestaurantClick(restaurant.id)} /> // TODO: Implement a click later on
      ))}
    </div>
  );
}

RestaurantList.propTypes = {
  restaurants: PropTypes.arrayOf(
    restaurantPropType,
  ),
};

export default RestaurantList;
