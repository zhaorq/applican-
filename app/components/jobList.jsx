import React from 'react';

const JobList = props => (
  {props.jobs.data.map((el, idx) => {
    return (<JobListEntry name={el.company} location={el.location}/>);
  })}
)
