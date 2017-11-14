import {
  UPDATE_IS_TEN_BIS,
  UPDATE_CUISINE,
  UPDATE_MIN_RATING,
  UPDATE_MAX_DELIVER_IN_MIN,
  UPDATE_SEARCH,
  LOAD_RESTAURANTS,
} from '../actions';


const initialState = {
  isTenBis: undefined,
  cuisine: undefined,
  minRating: undefined,
  maxDeliveryInMins: 30,
  searchQuery: undefined,
  restaurants: [{}],
};

const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_IS_TEN_BIS:
      return {
        ...state,
        isTenBis: action.isTenBis,
      };
    case UPDATE_CUISINE:
      return {
        ...state,
        cuisine: action.cuisine,
      };
    case UPDATE_MIN_RATING:
      return {
        ...state,
        minRating: action.minRating,
      };
    case UPDATE_MAX_DELIVER_IN_MIN:
      return {
        ...state,
        maxDeliveryInMins: action.maxDeliveryInMins,
      };
    case UPDATE_SEARCH:
      return {
        ...state,
        searchQuery: action.searchQuery,
      };
    case LOAD_RESTAURANTS:
      return {
        ...state,
        restaurants: action.restaurants,
      };
    default:
      return state;
  }
};

export default restaurantReducer;
