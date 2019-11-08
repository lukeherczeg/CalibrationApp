import React,{Component} from 'react';
import{Redirect,Link,NavLink,BrowserRouter as Router} from 'react-router'
import logo from '../../assets/paracosm.png';
import './Register.css';
//import { Link } from 'react-router-dom';
function Register() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="App-paracosm">
                {/* Logo */}
                    <a className="App-logo" target='_blank' rel="noopener noreferrer" href="https://paracosm.io">
                        <img className="paracosm-logo" src={logo} />
                        <i className="fas fa-external-link-alt external-link" data-fa-transform="up-6"></i>
                    </a>
                    </div>
            </header>
        </div> 
    );
}

export default Register;