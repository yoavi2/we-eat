import queryString from 'query-string';

const BASE_URL = 'http://localhost:3000';
const RESTAURANTS_URL = `${BASE_URL}/restaurants.json`;

export const UPDATE_IS_TEN_BIS_FILTER = 'UPDATE_IS_TEN_BIS_FILTER';
export const UPDATE_CUISINE_FILTER = 'UPDATE_CUISINE_FILTER';
export const UPDATE_MIN_RATING_FILTER = 'UPDATE_MIN_RATING_FILTER';
export const UPDATE_MAX_DELIVER_IN_MIN_FILTER = 'UPDATE_MAX_DELIVER_IN_MIN_FILTER';
export const UPDATE_SEARCH_FILTER = 'UPDATE_SEARCH_FILTER';
export const UPDATE_RESTAURANTS = 'UPDATE_RESTAURANTS';

export const updateIsTenBisFilter = (isTenBis) => ({
  type: UPDATE_IS_TEN_BIS_FILTER,
  isTenBis,
});

export const updateCuisineFilter = (cuisine) => ({
  type: UPDATE_CUISINE_FILTER,
  cuisine,
});

export const updateMinRatingFilter = (minRating) => ({
  type: UPDATE_MIN_RATING_FILTER,
  minRating,
});

export const updateMaxDeliverInMinFilter = (maxDeliverInMin) => ({
  type: UPDATE_MAX_DELIVER_IN_MIN_FILTER,
  maxDeliverInMin,
});

export const updateSearchFilter = (searchQuery) => ({
  type: UPDATE_SEARCH_FILTER,
  searchQuery,
});

export const updateRestaurants = (restaurants) => ({
  type: UPDATE_RESTAURANTS,
  restaurants,
});

export const loadRestaurants = () => {
  return (dispatch, getState) => {

    const { restaurantFilter } = getState();
    const { isTenBis, cuisine, minRating, maxDeliverInMin, searchQuery } = restaurantFilter;
    const filters = {
      'ten_bis': isTenBis,
      'min_rating': minRating,
      'max_deliver_in_min': maxDeliverInMin,
      'search': searchQuery,
    };
    const queryParams = queryString.stringify(filters);

    fetch(`${RESTAURANTS_URL}?${queryParams}`).then(response => response.json())
      .then(restaurants => dispatch(updateRestaurants(restaurants)));
  };
};

