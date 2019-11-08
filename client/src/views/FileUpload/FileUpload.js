import React from 'react';
import logo from '../../assets/paracosm.png';
import './FileUpload.css';
//import { Link } from 'react-router-dom';

function FileUpload() {
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

                <p>
                    This is our app.
                </p>
            </header>
        </div>
    );
}

export default FileUpload;
