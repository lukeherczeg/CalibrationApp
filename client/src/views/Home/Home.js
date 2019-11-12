import React from 'react';
import logo from '../../assets/paracosm.png';
import './Home.css';
import{ BrowserRouter as Router,Link,Navlink} from 'react-router-dom'
//import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="Main-Page">
          {/* Logo */}
          <a className="App-logo" target='_blank' rel="noopener noreferrer" href="https://paracosm.io">
            <img className="paracosm-logo" src={logo} />
            <i className="fas fa-external-link-alt external-link" data-fa-transform="up-6"></i>
          </a>
          <text>Username</text>
          <p><input type="text" name="E-MAIL" id="E-MAIL"/></p>
          <text>Password</text>
          <p><input type="text" name="Password" id="Password"/></p>
          <text>UUID</text>
          <p><input type="text" name="UUID" id="UUID"/></p>
          <a class="Buttons">
            <Link to="/Upload">
              <button class="ripples" type="button">
                Login
              </button>
            </Link>
            <Link to="/Register">
              <button class="ripple" type="button">
                Register
              </button>
            </Link>
          </a>
        </div>
    );
}

export default Home;
