import React from 'react';

export default class JobListEntry extends React.Component {
  constructor(props) {
    super (props);
  }

  render() {
    return (
      <div>
        <p>Name: {this.props.name} Located in {this.props.location}</p>
      </div>
    );
  }
}

