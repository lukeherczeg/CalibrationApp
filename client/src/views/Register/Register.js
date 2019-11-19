import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import logo from '../../assets/paracosm.png';
import './Register.css';

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
            <text>Enter E-Mail</text>
            <p><input type="text" name="E-MAIL" id="E-MAIL" /></p>
            <text>Enter Password</text>
            <p><input type="text" name="Password" id="Password" /></p>
            <text>Confirm Password</text>
            <p><input type="text" name="Confirm-Password" id="Confirm-Password" /></p>
            <Link to="/Home">
              <button class="homeButton" type="button">
                Submit
              </button>
            </Link>
          </div>
        );
    }
}

export default Register;
