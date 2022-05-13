import './Header.css';
import Logo from '../retrospective.png';
import React from 'react';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';

function Header() {
    function showNavigation() {
        if (Auth.loggedIn()) {
            return (
                <div className="nav-items">
                    <button className="nav-item">
                        <Link to='/board' className="nav-link">
                            Retro board
                        </Link>
                    </button>
                    <button className="nav-item">
                        {/* Add link to logout */}
                        <Link to='/' className="nav-link">
                            Logout
                        </Link>
                    </button>
                </div>
            );
        } else {
            return (
                <div className="nav-items">
                    <button 
                    // To be removed after auth is implemented
                    className="nav-item">
                        <Link to='/board' className="nav-link">
                            Retro board
                        </Link>
                    </button>
                    <button className="nav-item">
                        <Link to='/login' className="nav-link">
                            Login
                        </Link>
                    </button>
                    <button className="nav-item">
                        <Link to='/signup' className="nav-link">
                            Signup
                        </Link>
                    </button>
                </div>
            )
        }
    }

    return (
        <header>
            <img src={Logo} alt="retrospective logo purple"className="logo"></img>
            <h1>Team retrospectives</h1>
            <nav>
                {showNavigation()}
            </nav>
        </header>
    )
}

export default Header;