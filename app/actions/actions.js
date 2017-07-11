
import { SET_SEARCH_TERM, UPDATE_JOB_LISTINGS, TOGGLE_JOB_LISTING_STATUS, DELETE_JOB } from './actionTypes';

export function setSearchTerm(searchTerm) {
  return { type: SET_SEARCH_TERM, payload: searchTerm };
}

export function updateJobListings(jobListings) {
  return { type: UPDATE_JOB_LISTINGS, payload: jobListings };
}

export function toggleJobListingStatus(jobListing, number) {
  return { type: TOGGLE_JOB_LISTING_STATUS, payload: { jobListing, number } };
}

export function deleteJob(jobListing) {
  return { type: DELETE_JOB, payload: jobListing };
}

