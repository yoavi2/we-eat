import React from 'react';
import RestaurantList from './restaurantList';
import Map from './map';

const Content = (props) => (
  <div className="app-content">
    <RestaurantList restaurants={props.restaurants}/>
    <Map restaurants={props.restaurants}/>
  </div>
)

export default Content;

