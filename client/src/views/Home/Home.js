import React from 'react';
import logo from '../../assets/paracosm.png';
import './Home.css';
import{ BrowserRouter as Router,Link,Navlink} from 'react-router-dom'
//import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="App">
            
            <div className="App-header">
                {/* Logo */}
                    <a className="App-logo" target='_blank' rel="noopener noreferrer" href="https://paracosm.io">
                        <img className="paracosm-logo" src={logo} />
                        <i className="fas fa-external-link-alt external-link" data-fa-transform="up-6"></i>
                    </a>
            <Link to="/Register">
                <button class="ripple" type="button">
                    Register
                </button>
            </Link>
            </div>
            </div>
    );
}

export default Home;
