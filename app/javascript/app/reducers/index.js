import { combineReducers } from 'redux';
import restaurantFilter from './restaurant';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  form: formReducer,
  restaurantFilter,
});

export default rootReducer;
