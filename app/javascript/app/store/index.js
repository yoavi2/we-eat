import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import loadData from '../middlewear/loadData';
import createHistory from 'history/createBrowserHistory';
import {routerMiddleware} from 'react-router-redux';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const reactRouterMiddleware = routerMiddleware(history);

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(loadData),
    applyMiddleware(thunk),
    applyMiddleware(reactRouterMiddleware),
  ));

export { history, store };

