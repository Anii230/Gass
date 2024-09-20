import React from 'react';
import "./Topbar.css";

const Topbar = () => {
    return (
        <nav className="navbar">
            <div className="topContainer">
                {/* Logo */}
                <div className="topLogo">
                    <a href="#">Gass</a>
                </div>

                {/* Search bar */}
                <div className="topSearch">
                    <input
                        type="search"
                        className="searchInput"
                        placeholder="Search ideas"
                    />
                </div>

                {/* Create Post and Profile */}
                <div className="topCreate">
                    <button className="btn btn-primary">Create</button>
                    <div className="toppfp">
                        <img src="#" alt="Profile" className="profileImg" />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Topbar;
