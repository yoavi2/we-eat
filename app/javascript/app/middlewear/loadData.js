import {loadRestaurants} from '../actions';

const loadDataMiddleware = store => next => action => {

  // TODO: Receive a list of actions that only they will trigger function
  // TODO: Receive a function to dispatch
  next(action);

  if (action.type === '@@redux-form/CHANGE' &&
        (action.meta.form === 'search' ||
          action.meta.form === 'filters')) {
    store.dispatch(loadRestaurants());
  }
};

export default loadDataMiddleware;
