import { combineReducers } from 'redux';
import restaurantFilter from './restaurantFilter';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  form: formReducer,
  restaurantFilter,
});

export default rootReducer;
