import { createStore, combineReducers } from 'redux';
import { menuReducer } from './reducers/menu';

export const store = createStore(
  combineReducers({ menuReducer }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
