import React,{Component} from 'react';
import logo from '../../assets/paracosm.png';
import './Register.css';
import {BrowserRouter as Router, Link, Navlink} from 'react-router-dom'
import SignupComponent from './RegisterAuth';

// Sets up some intial UI components and then leaves the rest up to SignupComponent

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }
    render() {
        return (
          <div className="Main-Page">
            <a className="Logo" target='_blank' rel="noopener noreferrer" href="https://paracosm.io">
              <img className="paracosm-logo" alt="" src={logo} />
              <i className="fas fa-external-link-alt external-link" data-fa-transform="up-6"></i>
           </a>
          <SignupComponent />
          </div>
        );
    }
}

export default Register;
