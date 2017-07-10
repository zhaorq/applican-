import React from 'react';
import { connect } from 'react-redux';
import JobDetails from './jobDetailsComponent';

const Search = props => (
  <div>
    <h3>Search Results </h3>
    <JobDetails />
  </div>
);

const mapStateToProps = state => ({ jobAPIData: state.jobAPIData });

export default connect(mapStateToProps)(Search);
