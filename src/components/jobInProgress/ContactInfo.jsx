import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import MDDelete from 'react-icons/md/delete';
import { removeContactApi, fetchContactsApi } from '../../actions/actions';

export class ContactInfo extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchContacts(this.props.jobId);
  }

  render() {
    return (
      <div>
        <table className="contactTable" style={{ border: '1px solid' }} >
          <thead className="contactHead" style={{ border: '1px solid' }}>
            <tr >
              <th>Name</th>
              <th>Position</th>
              <th>Email</th>
              <th>FollowUp Date</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody style={{ border: '1px solid' }}>
            { Array.isArray(this.props.contacts) && this.props.contacts.map((el) => {
              return (
                <tr className="contactRow" key={el.id} style={{ border: '1px solid' }}>
                  <td className="contactRow">{el.name}</td>
                  <td className="contactRow">{el.position}</td>
                  <td className="contactRow">{el.Email}</td>
                  <td className="contactRow">{el.FollowUp.toString()}</td>
                  <td>
                    <button onClick={() => this.props.removeContactApi(el.id)}>
                      <MDDelete size={15} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({ isUserAuth: state.user, contacts: state.contacts });
const mapDispatchToProps = dispatch => ({
  fetchContacts(id) {
    dispatch(fetchContactsApi(id));
  },
  removeContactApi(id) {
    dispatch(removeContactApi(id));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactInfo);
