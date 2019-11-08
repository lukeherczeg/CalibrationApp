import React from 'react';
import logo from '../../assets/paracosm.png';
import './Home.css';
import{ BrowserRouter as Router,Link,Navlink} from 'react-router-dom'
//import { Link } from 'react-router-dom';

function Home() {
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
            <div className="RegisterThingy">
            <li>
            <Link to="/Register">Register</Link>
            </li>
            </div>
            </header>
        </div>
    );
}

export default Home;
