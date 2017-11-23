import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RestaurantsApp from './restaurantsApp';
import NewRestaurant from './newRestaurant';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={RestaurantsApp}/>
          <Route exact path="/new" component={NewRestaurant}/>
        </Switch>
      </div>
    );
  }
}

export default App;
