import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import loadData from '../middlewear/loadData';

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(loadData),
    applyMiddleware(thunk),
  ));


export default store;

