import React from 'react';
import { Link } from 'react-router-dom'; // For routing links
import './Topbar.css';

const Topbar = () => {
    return (
        <nav className="Topbar">
            <div className="topContainer">
                {/* Logo */}
                <div className="topLogo">
                    <a href="#">Gass</a>
                </div>

                {/* Navigation Links */}
                <div className="topLinks">
                    <Link to="/NewHome" className="topLink">Feed</Link>
                    <Link to="/Explore" className="topLink">Explore</Link>
                    <Link to="/Profile" className="topLink">Profile</Link>
                </div>
            </div>
        </nav>
    );
};

export default Topbar;
