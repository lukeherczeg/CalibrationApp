import React,{Component} from 'react';
import{Redirect,Link,NavLink,BrowserRouter as Router} from 'react-router-dom'
import logo from '../../assets/paracosm.png';
import './Register.css';
//import { Link } from 'react-router-dom';
function Register() {
    return (
        <div className="Main-Page">
        {/* Logo */}
          <a className="App-logo" target='_blank' rel="noopener noreferrer" href="https://paracosm.io">
            <img className="paracosm-logo" src={logo} />
              <i className="fas fa-external-link-alt external-link" data-fa-transform="up-6"></i>
          </a>
          <text>Enter E-Mail</text>
          <p><input type="text" name="E-MAIL" id="E-MAIL"/></p>
          <text>Enter Password</text>
          <p><input type="text" name="Password" id="Password" /></p>
          <text>Confirm Password</text>
          <p><input type="text" name="Confirm-Password" id="Confirm-Password" /></p>
            <Link to="/Home">
              <button class="ripple" type="button">
                Submit
              </button>
            </Link>
        </div>
    );
}

export default Register;
