import React from 'react';
import RestaurantList from './restaurantList';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.props.actions.loadRestaurants();
  }

  render() {
    return (
      <RestaurantList restaurants={this.props.restaurants}/>
    );
  }
}

const mapStateToProps = (state) => ({
  restaurants: state.restaurantFilter.restaurants,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

