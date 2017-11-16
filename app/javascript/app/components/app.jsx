import React from 'react';
import RestaurantList from './restaurantList';
import Search from './search';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions';
import Filters from './filters';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.actions.loadRestaurants();
  }

  render() {
    return (
      <div>
        <Search />
        <Filters />
        <RestaurantList restaurants={this.props.restaurants}/>
      </div>
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

