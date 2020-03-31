import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { menuReducer } from './reducers/menu';
import { contactsReducer } from './reducers/contacts';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  combineReducers({ menuReducer, contactsReducer }),
  composeEnhancers(applyMiddleware(thunk)),
);
