import { createStore, combineReducers } from 'redux';
import { menuReducer } from './reducers/menu';

export const store = createStore(combineReducers({ menuReducer }));
