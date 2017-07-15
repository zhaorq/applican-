import React from 'react';
import JobDetails from './jobDetailsComponent';
import JobList from './jobList';
import JobSearch from './jobSearchComponent';

const Search = props => (
  <div>
    <JobSearch history={props.history} />
    <div className="mui-row">
      <div className="mui-col-md-5 mui-col-md-offset-1">
        <JobList history={props.history}/>
      </div>
      <div className="mui-col-md-5">
        <JobDetails />
      </div>
    </div>
  </div>
);

export default Search;
