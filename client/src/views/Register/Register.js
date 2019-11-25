import React,{Component} from 'react';
import {BrowserRouter as Router, Link, Navlink} from 'react-router-dom'
import logo from '../../assets/paracosm.png'
import './Register.css'
import SignupComponent from './RegisterAuth';

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
              <img className="paracosm-logo" src={logo} />
              <i className="fas fa-external-link-alt external-link" data-fa-transform="up-6"></i>
             </a>
              <SignupComponent />
            {/* <Link to="/Home">
              <button className="homeButton" type="button">
                Submit
              </button>
            </Link> */}
          </div>
        );
    }
}

export default Register;
