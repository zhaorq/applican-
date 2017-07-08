import React from 'react';
import { connect } from 'react-redux';

const Search = () => (
  <div>
    <p>Here are my search results</p>
  </div>
);

const mapStateToProps = state => ({ jobAPIData: state.jobAPIData });

export default connect(mapStateToProps)(Search);
