import queryString from 'query-string';

const BASE_URL = 'http://localhost:3000';
const RESTAURANTS_URL = `${BASE_URL}/restaurants.json`;

export const UPDATE_RESTAURANTS = 'UPDATE_RESTAURANTS';

export const updateRestaurants = (restaurants) => ({
  type: UPDATE_RESTAURANTS,
  restaurants,
});

export const loadRestaurants = () => {
  return (dispatch, getState) => {

    const { form } = getState();
    const { search, filters } = form;

    // Must declare variables
    let searchQuery, isTenBis, cuisine, minRating, maxDeliverInMin;

    if (search.values) {
      searchQuery = search.values.searchQuery;
    }

    if (filters.values) {
      // { isTenBis, cuisine, minRating, maxDeliverInMin } = filters.values;
      isTenBis = filters.values.isTenBis;
      cuisine = filters.values.cuisine;
      minRating = filters.values.minRating;
      maxDeliverInMin = filters.values.maxDeliverInMin;

    }

    const urlFilters = {
      'ten_bis': (isTenBis) ? true : undefined,
      'cuisine': cuisine,
      'min_rating': minRating,
      'max_deliver_in_min': maxDeliverInMin,
      'search': searchQuery,
      'best': true,
    };
    const queryParams = queryString.stringify(urlFilters);

    fetch(`${RESTAURANTS_URL}?${queryParams}`).then(response => response.json())
      .then(restaurants => dispatch(updateRestaurants(restaurants)));
  };
};

export const createRestaurant = (values) => {
  return (dispatch, getState) => {
    console.log('values dispatched!');
    console.log(values);
  };
};


