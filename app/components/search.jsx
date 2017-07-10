import React from 'react';
import { connect } from 'react-redux';
import JobListEntry from './jobListEntry.jsx';

const Search = props => {
  return (
    <div>
      <h3>Search Results </h3>
      {props.jobAPIData.data.map((el, idx) => {
        return (<JobListEntry name={el.company} location={el.location}/>);
      })}
    </div>
  );
};

const mapStateToProps = state => ({ jobAPIData: state.jobAPIData });

export default connect(mapStateToProps)(Search);
