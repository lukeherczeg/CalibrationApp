import React, { Component } from "react";
import {Link} from 'react-router-dom'
import logo from '../../assets/paracosm.png';
import './Home.css';
import axios from 'axios'
import SigninComponent from'../Register/SigninComponent';
//import { Link } from 'react-router-dom';

class Home extends Component {

  // Set the UUID state to null
    constructor(props) {
        super(props);
        this.state = {
            UUID: '',
        };

    }
  // Ensure the UUID state changes when entered.
    handleUuidChange = e => {
        console.log("Change");
        this.setState({
            [e.target.name] : e.target.value,
        });
    };

    handleSubmit = e => {
        const uuid = this.state;
        const sendUuid = {
            uuid,
        };

        axios
            .post('http://localhost:5000/uuid', sendUuid)
            .then(() => console.log('Uuid posted'))
            .catch(err => {
                console.error(err);
            });
    };

    render() {
        return (
          <div className="Main-Page">
            <a className="Logo" target='_blank' rel="noopener noreferrer" href="https://paracosm.io">
                <img className="paracosm-logo" src={logo} />
                <i className="fas fa-external-link-alt external-link" data-fa-transform="up-6"></i>
            </a>
            <SigninComponent/>
            {/* <text>Username</text>
            <p><input type="text" name="E-MAIL" id="E-MAIL" /></p>
            <text>Password</text>
            <p><input type="text" name="Password" id="Password" /></p>

            {/*onChange, update the text in the UUID string*/}
            <text>UUID</text>
            <div className = "form-group">
                <input value={this.state.UUID} type = "email" className = "form-control" onChange={this.handleUuidChange}/>
            </div>
            <a class="Buttons">
              <Link to="/Upload">
          {/* When login pressed, handleSubmit and route to the Upload page.*/}
                <button class="loginButton" type="button" onClick={() => { this.handleSubmit() }}>
                  Continue to upload...
                </button>
              </Link>
            </a>
          </div>
        );
    }
}

// <text>UUID</text>
// <div className = "form-group">
//     <input value={this.state.UUID} type = "email" className = "form-control" onChange={this.handleUuidChange}/>
// </div>
// <a class="Buttons">
//   <Link to="/Upload">
// {/* When login pressed, handleSubmit and route to the Upload page.*/}
//     <button class="loginButton" type="button" onClick={() => { this.handleSubmit() }}>
//       Continue to upload...
//     </button>
//   </Link>
// </a>




export default Home;
