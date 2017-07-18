import { createSelector } from 'reselect';

const getSortFilter = state => state.sortFilter;
const getJobs = state => state.userJobs;

const getSortedJobs = createSelector(
  getSortFilter,
  getJobs,
  (sortFilter, userJobs) => {
    console.log(sortFilter);
    switch (sortFilter) {
      case 'BY_PROGRESS':
        return userJobs.slice().sort((jobA, jobB) => jobA.status - jobB.status);
      default:
        return userJobs;
    }
  });
export default getSortedJobs;

