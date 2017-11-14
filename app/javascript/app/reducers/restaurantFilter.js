import {
  UPDATE_IS_TEN_BIS_FILTER,
  UPDATE_CUISINE_FILTER,
  UPDATE_MIN_RATING_FILTER,
  UPDATE_MAX_DELIVER_IN_MIN_FILTER,
  UPDATE_SEARCH_FILTER,
  UPDATE_RESTAURANTS,
} from '../actions';


const initialState = {
  isTenBis: undefined,
  cuisine: undefined,
  minRating: undefined,
  maxDeliveryInMins: 30,
  searchQuery: undefined,
  restaurants: [],
};

const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_IS_TEN_BIS_FILTER:
      return {
        ...state,
        isTenBis: action.isTenBis,
      };
    case UPDATE_CUISINE_FILTER:
      return {
        ...state,
        cuisine: action.cuisine,
      };
    case UPDATE_MIN_RATING_FILTER:
      return {
        ...state,
        minRating: action.minRating,
      };
    case UPDATE_MAX_DELIVER_IN_MIN_FILTER:
      return {
        ...state,
        maxDeliveryInMins: action.maxDeliveryInMins,
      };
    case UPDATE_SEARCH_FILTER:
      return {
        ...state,
        searchQuery: action.searchQuery,
      };
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
