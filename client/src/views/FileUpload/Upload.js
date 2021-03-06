import React, { Component } from "react";
import Dropzone from "./dropzone/Dropzone";
import Progress from "./progress/Progress";
import {Link} from 'react-router-dom'
import logo from '../../assets/paracosm.png';
import checkCircleOutline from '../../assets/checkCircleOutline.svg'
import "./Upload.css";
import { runInNewContext } from "vm";
import authenticated from '../../authenticated'
import axios from 'axios'

// Possibly the most important file in our program. This react component allows users to uplaod
// files but also allows them to view previously uploaded files.

// Much of the file upload code can be attributed to the following tutorial:
// https://malcoded.com/posts/react-file-upload/

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      uploading: false,
      uploadProgress: {},
      successfullUploaded: false,
      viewFiles: [],
      gotFiles: false
    };

    this.onFilesAdded = this.onFilesAdded.bind(this);
    this.uploadFiles = this.uploadFiles.bind(this);
    this.sendRequest = this.sendRequest.bind(this);
    this.renderActions = this.renderActions.bind(this);
    this.getFiles = this.getFiles.bind(this);
  }

  // After setting state and binding our functions, we can create each function.
  // getFiles sends a request to Axios to recieve a response from the endpoint declared in
  // server.js.
  async getFiles() {
    var myFiles = [];
    let res = await axios
        .post('/getFiles')
        .then(function (response) {
            // Create an array that encases the individual json data.
            myFiles = Array.from(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });

      // Here, we need an array of arrays for .map to work later.
      // Thus, we use the following function
      var output = myFiles.map(function(obj) {
        return Object.keys(obj).sort().map(function(key) {
          return obj[key];
        });
      });

      this.setState({ viewFiles: output});
      this.setState({ gotFiles: true});
  }

  // Add files from the dropzone
  onFilesAdded(files) {
    this.setState(prevState => ({
      files: prevState.files.concat(files)
    }));
  }

  // Pushes all files to the database.
  async uploadFiles() {
    this.setState({ uploadProgress: {}, uploading: true });
    const promises = [];
    this.state.files.forEach(file => {
      promises.push(this.sendRequest(file));
    });
    try {
      await Promise.all(promises);

      this.setState({ successfullUploaded: true, uploading: false });
    } catch (e) {
      // Not Production ready! Do some error handling here instead...
      this.setState({ successfullUploaded: true, uploading: false });
    }
  }

  // Send a request to the server to upload each file
  sendRequest(file) {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();

      req.upload.addEventListener("progress", event => {
        if (event.lengthComputable) {
          const copy = { ...this.state.uploadProgress };
          copy[file.name] = {
            state: "pending",
            percentage: (event.loaded / event.total) * 100
          };
          this.setState({ uploadProgress: copy });
        }
      });

      req.upload.addEventListener("load", event => {
        const copy = { ...this.state.uploadProgress };
        copy[file.name] = { state: "done", percentage: 100 };
        this.setState({ uploadProgress: copy });
        resolve(req.response);
      });

      req.upload.addEventListener("error", event => {
        const copy = { ...this.state.uploadProgress };
        copy[file.name] = { state: "error", percentage: 0 };
        this.setState({ uploadProgress: copy });
        reject(req.response);
      });

      const formData = new FormData();
      formData.append("file", file, file.name);
      req.open("POST", "/Upload");
      req.send(formData);
    });
  }

  // Render progress of the file upload to show the file upload bar
  renderProgress(file) {
    const uploadProgress = this.state.uploadProgress[file.name];
    if (this.state.uploading || this.state.successfullUploaded) {
      return (
        <div className="ProgressWrapper">
          <Progress progress={uploadProgress ? uploadProgress.percentage : 0} />
          <img
            className="CheckIcon"
            alt="done"
            src= {checkCircleOutline}
            style={{
              opacity:
                uploadProgress && uploadProgress.state === "done" ? 0.5 : 0.5
            }}
          />
        </div>
      );
    }
  }
  // Render actions so that button functionality is linked to the state
  renderActions() {
    if (this.state.successfullUploaded) {
      return (
        <button
          onClick={() =>
            this.setState({ files: [], successfullUploaded: false })
          }
        >
          Clear
        </button>
      );
    } else {
      return (
        <button
          disabled={this.state.files.length < 0 || this.state.uploading}
          onClick={this.uploadFiles}
        >
          Upload
        </button>
      );
    }
  }

  render() {

    if(!(this.state.viewFiles === undefined)){
      {/* First populate an array of files to view*/}
      var display = this.state.viewFiles;
      {/* Grab the first element of the array of files, and UUID = first element of the split key*/}
      var uuid = this.state.gotFiles
                ? 'Files in UUID \"' + display.map((item, index) => (item[1].split("/")[0]))[0] + '\"'
                : ' '
    }
    else if (this.state.viewFiles === undefined || this.state.viewFiles.length < 1){
      var display = ['undefined'];
      var uuid = "There's nothing to see here yet!";
    }


    {/* Here, we show the logout button, the view files button, the file dropzone,
        the listing of uploaded files and their progress bars,
        and listing of previously uploaded files. */}

    return (
      <div className="Upload">
        <div className="Actions">{this.renderActions()}</div>
        <a class="buttonLink">
          <Link to="/Home">
            <button onClick  = {authenticated.logout()} class="logoutButton" type="button">
              Logout
            </button>
          </Link>
          <button class= "viewFilesButton" onClick={this.getFiles}>
            View Files
          </button>
          </a>
        <span className="Title">Upload Files</span>
        <div className="Content">
          <div>
            <Dropzone
              onFilesAdded={this.onFilesAdded}
              disabled={this.state.uploading || this.state.successfullUploaded}
            />
          </div>
          <a className="Logo" target='_blank' rel="noopener noreferrer" href="https://paracosm.io">
            <img className="paracosm-logo" alt="" src={logo} />
            <i className="fas fa-external-link-alt external-link" data-fa-transform="up-6"></i>
          </a>
          <div className="Files">
            {this.state.files.map(file => {
              return (
                <div key={file.name} className="Row">
                  <span className="Filename">{file.name}</span>
                  {this.renderProgress(file)}
                </div>
              );
          })}
          </div>
        </div>
        <span className="UUID">
         {uuid}
        </span>
        <div className="viewFiles">
          {display.map((item, index) => (
              <p> {item[1].split("/")[1]}  </p>
          ))}
        </div>
      </div>
    );
  }
}

export default Upload;
