import React, { Component } from "react";
import {Link} from 'react-router-dom'
import logo from '../../assets/paracosm.png';
import './Home.css';
import axios from 'axios'
import SigninComponent from'../Register/SigninComponent';
import UUIDDisplay from './UUID'

// Sets up some intial UI components and then leaves the rest up to SigninComponent

class Home extends Component {
    render() {
        return (
          <div className="Main-Page">
            <a className="Logo" target='_blank' rel="noopener noreferrer" href="https://paracosm.io">
                <img className="paracosm-logo" src={logo} />
                <i className="fas fa-external-link-alt external-link" data-fa-transform="up-6"></i>
            </a>
            <SigninComponent/>
          </div>
        );
    }
}

export default Home;
