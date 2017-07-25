import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ Component, isUserAuth }) => {
  console.log(Component, isUserAuth);
  return(
  <Route
    path="/dashboard"
    render={props => (
      isUserAuth ? (
        <Component {...props} />
      ) : (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location },
        }}
        />
      )
    )}
  />
)};

const mapStateToProps = (state, ownProps) => ({ isUserAuth: state.user, Component: ownProps.Component });

export default connect(mapStateToProps, null)(PrivateRoute);
