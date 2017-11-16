import {
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
