import { combineReducers } from 'redux';
import { SET_SEARCH_TERM, ADD_JOB_LISTINGS } from '../actions/actionTypes';

const mockUserSavedJobsData = [
  { company: 'ZEDVentures Incorporated',
    date: '2017-07-10',
    detailUrl: 'http://www.dice.com/job/result/10342830/066933?src=19',
    jobTitle: 'Open Text Consultant',
  },
];

const mockUserJobsData = [
  { company: 'ZEDVentures Incorporated',
    date: '2017-07-10',
    detailUrl: 'http://www.dice.com/job/result/10342830/066933?src=19',
    jobTitle: 'Open Text Consultant',
    status: 4,
  },
];


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

const userSavedJobs = (state = mockUserSavedJobsData, action) => {
  if (action.type) {
    return state;
  }
  return state;
};

const userJobs = (state = mockUserJobsData, action) => {
  if (action.type) {
    return state;
  }
  return state;
};

const rootReducer = combineReducers({ searchTerm, jobAPIData, userJobs, userSavedJobs });

export default rootReducer;
