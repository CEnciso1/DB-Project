import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-dark top">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navMainMenu" aria-controls="navMainMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div id="navMainMenu" class="navbar-collapse collapse">
                <div class="navbar-nav ml-auto">
                    <Link to='/' className="nav-item nav-link active">Home</Link>
                    <Link to='/Search' className="nav-item nav-link active">Search</Link>
                    <Link to='/borrowerManagement' className="nav-item nav-link active">BorrowerManagement</Link>                   
                </div>
            </div>
        </nav>
    );
}

export default Nav;