import React, { Component } from "react";
import {Link} from 'react-router-dom'
import './Home.css';
import axios from 'axios'

class UUID extends Component {

  // Set the UUID state to null
    constructor(props) {
        super(props);
        this.state = {
            UUID: '',
        };

    }
  // Ensure the UUID state changes when entered.
    handleUuidChange = e => {
        this.setState({
            [e.target.name] : e.target.value,
        });
    };

  // When continue is pressed, the UUID is sent to the server.
    handleSubmit = e => {
        const uuid = this.state;
        const sendUuid = {
            uuid,
        };
        // Here, we use axios to send a post request to the server.
        axios
            .post('/uuid', sendUuid)
            .then(() => console.log('Uuid posted'))
            .catch(err => {
                console.error(err);
            });
    };

    // Some simple React follows to allow UUID input and onClick submission for the button.

    render() {
        return (
          <div>
            <div className = "title">
              <div>
                <text>Sign in successful! </text>
              </div>
            </div>
            <text> Please enter your UUID to continue.</text>
            <div className = "form-group">
                <input placeholder = "UUID..." className = "uuidInput" name="UUID" id="UUID" type="text" onChange={this.handleUuidChange}/>
            </div>
            <a class="Buttons">
              <Link to="/Upload">
                <button class="uuidButton" type="button" onClick={() => { this.handleSubmit() }}>
                  Continue to upload...
                </button>
              </Link>
            </a>
        </div>
    )}
}

export default UUID
