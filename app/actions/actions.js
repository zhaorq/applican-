
import { SET_SEARCH_TERM, ADD_JOB_LISTINGS, GET_JOB_API } from './actionTypes';

export function setSearchTerm(searchTerm) {
  return { type: SET_SEARCH_TERM, payload: searchTerm };
}

export function addJobListings(jobListings) {
  return { type: ADD_JOB_LISTINGS, payload: jobListings };
}

