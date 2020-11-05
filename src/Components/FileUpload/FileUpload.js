
import React, { Component } from "react";
import Files from "react-files";
import {Button} from 'react-bootstrap'

class FileUpload extends Component {
  constructor() {
    super();
    this.state = {
      jsonFile: {}
    };

    this.fileReader = new FileReader();
    this.fileReader.onload = event => {
      this.setState({ jsonFile: JSON.parse(event.target.result) }, () => {
        this.props.getJson(this.state.jsonFile)
      });
    };
  }

  render() {
    return (
      <Button >
      <div className="files">
        <Files
          className="files-dropzone"
          onChange={file => {
            this.fileReader.readAsText(file[0]);
          }}
          onError={err => console.log(err)}
          accepts={[".json"]}
          multiple
          maxFiles={3}
          maxFileSize={10000000}
          minFileSize={0}
          clickable
        >
          Open json
        </Files>
      </div>
      </Button>
    );
  }
}
export default FileUpload