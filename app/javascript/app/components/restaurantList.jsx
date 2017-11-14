import React from 'react';
import PropTypes from 'prop-types';
import Restaurant from 'restaurant';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions';


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
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ),
};

const mapStateToProps = (state) => ({
  restaurants: state.restaurants,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);

