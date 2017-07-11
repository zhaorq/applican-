import axios from 'axios';
import { SET_SEARCH_TERM, UPDATE_JOB_LISTINGS, TOGGLE_JOB_LISTING_STATUS, DELETE_JOB, SEE_JOB_DETAILS } from './actionTypes';

export function setSearchTerm(searchTerm) {
  return { type: SET_SEARCH_TERM, payload: searchTerm };
}

export function updateJobListings(jobListings) {
  return { type: UPDATE_JOB_LISTINGS, payload: jobListings };
}

export function toggleJobListingStatus(jobListing, number) {
  return { type: TOGGLE_JOB_LISTING_STATUS, payload: { jobListing, number } };
}

export function updateJobStatusAPI(job, status) {
  return (dispatch) => {
    axios.put(`/api/jobs/${job.id}`, { status })
      .then(() => dispatch(toggleJobListingStatus(job, status)))
      .catch(err => console.log(err));
  };
}
export function deleteJobAPI(job, status) {
  return (dispatch) => {
    axios.delete(`/api/jobs/${job.id}`)
      .then(() => dispatch(toggleJobListingStatus(job, status)))
      .catch(err => console.log(err));
  };
}

export function deleteJob(jobListing) {
  return { type: DELETE_JOB, payload: jobListing };
}

export function selectJobDetails(jobDetail) {
  return { type: SEE_JOB_DETAILS, payload: jobDetail };
}
