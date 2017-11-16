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
    console.log(getState());
    const { form } = getState();
    console.log(form);

    const { search, filters } = form;
    const searchQuery = search.searchQuery;
    const { isTenBis, cuisine, minRating, maxDeliverInMin } = filters;

    const urlFilters = {
      'ten_bis': (isTenBis) ? true : undefined,
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

