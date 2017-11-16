import {
  UPDATE_IS_TEN_BIS_FILTER,
  UPDATE_CUISINE_FILTER,
  UPDATE_MIN_RATING_FILTER,
  UPDATE_MAX_DELIVER_IN_MIN_FILTER,
  UPDATE_SEARCH_FILTER,
  UPDATE_RESTAURANTS,
} from '../actions';


const initialState = {
  restaurants: [],
};

const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_RESTAURANTS:
      return {
        ...state,
        restaurants: action.restaurants,
      };
    default:
      return state;
  }
};

export default restaurantReducer;
