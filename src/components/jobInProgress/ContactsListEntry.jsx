import React from 'react';

export default class Contacts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>
          <li>Name: {this.props.name}</li>
          <li>Position: {this.props.position}</li>
          <li>Email: {this.props.Email}</li>
          <li>Follow Up:{this.props.FollowUp}</li>
        </ul>
      </div>
    );
  }
}
