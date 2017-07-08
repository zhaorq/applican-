import React from 'react';

class Signup extends React.Components {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      password: '',
      email: '',
    };
  }

  render() {
    return (
      <div>
        <h1>Signup</h1>
      </div>
    );
  }
}

export default Signup;
