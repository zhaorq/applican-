import { combineReducers } from 'redux';
import { SET_SEARCH_TERM, ADD_JOB_LISTINGS, SEE_JOB_DETAILS } from '../actions/actionTypes';

const searchTerm = (state = '', action) => {
  if (action.type === SET_SEARCH_TERM) {
    return action.payload;
  }
  return state;
};

const jobAPIData = (state = {}, action) => {
  if (action.type === ADD_JOB_LISTINGS) {
    return Object.assign({}, state, { data: action.payload });
  }
  return state;
};

const jobDetailsDisplay = (state = {}, action) => {
  if (action.type === SEE_JOB_DETAILS) {
    return Object.assign({}, state, { data: action.payload });
  }
  return state;
};

const rootReducer = combineReducers({ searchTerm, jobAPIData, jobDetailsDisplay });

export default rootReducer;
