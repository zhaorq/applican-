import React from 'react';
import axios from 'axios';
import Contacts from './ContactsListEntry';

export default class ContactInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { contactList: [] };
  }
  componentDidMount() {
    axios.get('/api/contacts')
      .then((contactList) => {
        this.setState({ contactList });
      });
  }

  render() {
    return (
      <div>
        <p>{ Array.isArray(this.state.contactList.data) ? this.state.contactList.data.map((el) => {
          return (
            <div className="mui--divider-bottom">
              <Contacts name={el.name} position={el.position} Email={el.Email} FollowUp={el.FollowUp} />
            </div>
          );
        }) : 'no contacts' }</p>
      </div>
    );
  }
}
