export const UPDATE_IS_TEN_BIS         = 'UPDATE_IS_TEN_BIS';
export const UPDATE_CUISINE            = 'UPDATE_CUISINE';
export const UPDATE_MIN_RATING         = 'UPDATE_MIN_RATING';
export const UPDATE_MAX_DELIVER_IN_MIN = 'UPDATE_MAX_DELIVER_IN_MIN';
export const UPDATE_SEARCH             = 'UPDATE_SEARCH';
export const LOAD_RESTAURANTS          = 'LOAD_RESTAURANTS';

export const updateIsTenBis = () => ({
  type: UPDATE_IS_TEN_BIS,
});

export const updateCuisine = () => ({
  type: UPDATE_CUISINE,
});

export const updateMinRating = () => ({
  type: UPDATE_MIN_RATING,
});

export const updateMaxDeliverInMin = () => ({
  type: UPDATE_MAX_DELIVER_IN_MIN,
});

export const updateSearch = () => ({
  type: UPDATE_SEARCH,
});

export const loadRestaurants = () => {
  return (dispatch) => {
    // Get restaurants from server
  };
};

