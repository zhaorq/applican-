import React from 'react';

const JobDetails = () => (
  <div>
    <h2>{props.jobTitle}</h2>
    <h3>{props.company}</h3>
    <h5>{props.location}</h5>
    <div>
      <p>{props.description}</p>
    </div>
  </div>
);

export default JobDetails;
