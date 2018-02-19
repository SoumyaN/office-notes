import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { notesReducer } from './home';

export const reducers = combineReducers({
    notesReducer,
    routing: routerReducer
});