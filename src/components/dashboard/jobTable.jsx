import React from 'react';
import { Link } from 'react-router-dom';

const JobTable = props => (
  <table className="mui-table">
    <thead>
      <tr>
        <th />
      </tr>
    </thead>
    <tbody>
      {props.userJobs.filter(job => job.status <= props.filter).map(job =>
        (<tr key={job.id}>
          {props.handleAddJobToQueue &&
          <td width={50}>
            <span>
              <button
                className="mui-btn mui-btn--fab mui-btn--danger mui-btn--small"
                onClick={() => props.handleAddJobToQueue(job)}
              >+
              </button>
            </span>
          </td>
          }
          <td>
            <Link to={`/jobs/${job.id}`}>{job.position}</Link>
          </td>
          <td>{job.company}</td>
          <td>{new Date(job.post_date).toDateString()}</td>
        </tr>))
      }
    </tbody>
  </table>
);

export default JobTable;
