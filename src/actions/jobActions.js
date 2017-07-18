import { SET_SEARCH_TERM, SEE_JOB_DETAILS, SET_JOB_DESC, ADD_CONTACT } from './actionTypes';

export function setSearchTerm(searchTerm) {
  return { type: SET_SEARCH_TERM, payload: searchTerm };
}

export function selectJobDetails(jobDetail) {
  return { type: SEE_JOB_DETAILS, payload: jobDetail };
}

export function setJobDesc(jobDesc) {
  return { type: SET_JOB_DESC, payload: jobDesc };
}

export function addContact(name, position, Email, FollowUp) {
  return { type: ADD_CONTACT, payload: { name, position, Email, FollowUp } };
}