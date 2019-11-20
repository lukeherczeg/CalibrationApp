import React, { Component } from "react";
import {Link} from 'react-router-dom'
import logo from '../../assets/paracosm.png';
import './Home.css';
import axios from 'axios'
//import { Link } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            UUID: '',
        };

    }

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
            
            <text>Username</text>
            <p><input type="text" name="E-MAIL" id="E-MAIL" /></p>
            <text>Password</text>
            <p><input type="text" name="Password" id="Password" /></p>
            <text>UUID</text>
                <p><input type="text" name="UUID" id="UUID" onChange={this.handleUuidChange}/></p>
            
            <a class="Buttons">
              <Link to="/Upload">
                        <button class="loginButton" type="button" onClick={() => { this.handleSubmit() }}>
                  Login
                </button>
              </Link>
              <Link to="/Register">
                <button class="registerButton" type="button">
                  Register
                </button>
              </Link>
            </a>
          </div>
        );
    }
}

export default Home;
