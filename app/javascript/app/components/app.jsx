import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions';
import Filters from './filters';
import Header from './header';
import Content from './content';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.actions.loadRestaurants();
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Filters />
        <Content restaurants={this.props.restaurants} />
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

