import React, { Component } from 'react';
import FileUploader from '../shared/fileUploader';

class SavedResume extends Component {
  constructor(props) {
    super(props);
    this.state = { showUploadForm: false };
    this.toggleUploadForm = this.toggleUploadForm.bind(this);
  }
  toggleUploadForm() {
    const { showUploadForm } = this.state;
    this.setState({ showUploadForm: !showUploadForm });
  }
  render() {
    const { jobId, hasCoverLetter } = this.props;
    const { showUploadForm } = this.state;
    const endpointUrl = `/coverletter/${jobId}`;
    const render = (hasCoverLetter && !showUploadForm) ?
      (<div>
        <a>Cover Letter</a>
        <button onClick={this.toggleUploadForm}>Update</button>
      </div>)
      : (<FileUploader endpointUrl={endpointUrl} onSubmit={this.toggleUploadForm} />);
    return render;
  }
}

export default SavedResume;
