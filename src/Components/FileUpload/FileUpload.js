
import React, { Component } from "react";
import Files from "react-files";

class FileUpload extends Component {
  constructor() {
    super();
    this.state = {
      jsonFile: {}
    };

    this.fileReader = new FileReader();
    this.fileReader.onload = event => {
      this.setState({ jsonFile: JSON.parse(event.target.result) }, () => {
        console.log(this.state.jsonFile);
      });
    };
  }

  render() {
    return (
        <button>
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
          Upload Json
        </Files>
      </div>
      </button>
    );
  }
}
export default FileUpload