import { combineReducers } from 'redux';
import restaurantFilter from './restaurant';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  form: formReducer,
  router: routerReducer,
  restaurantFilter,
});

export default rootReducer;
