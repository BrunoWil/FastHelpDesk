import React from 'react';
import '../navbar/navbar.css';

function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg">
            <span className="navbar-brand text-white text-weight-bold">FastHelp</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home</a>
                </li>

                <button type="button" class="btn btn-dark">Sign out</button>
                
                </ul>
                
            </div>
            
        </nav>
    )
}

export default Navbar;