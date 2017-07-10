
import { SET_SEARCH_TERM, ADD_JOB_LISTINGS, SEE_JOB_DETAILS } from './actionTypes';

export function setSearchTerm(searchTerm) {
  return { type: SET_SEARCH_TERM, payload: searchTerm };
}

export function addJobListings(jobListings) {
  return { type: ADD_JOB_LISTINGS, payload: jobListings };
}

export function selectJobDetails(jobDetail) {
  return { type: SEE_JOB_DETAILS, payload: jobDetail };
}
