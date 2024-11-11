import React from 'react';
import "./Topbar.css";

const Topbar = () => {
    return (
        <nav className="Topbar">
            <div className="topContainer">
                {/* Logo */}
                <div className="topLogo">
                    <a href="#" >Gass</a>
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
                    <div className="toppfp">
                    <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 7.063C16.5 10.258 14.57 13 12 13c-2.572 0-4.5-2.742-4.5-5.938C7.5 3.868 9.16 2 12 2s4.5 1.867 4.5 5.063zM4.102 20.142C4.487 20.6 6.145 22 12 22c5.855 0 7.512-1.4 7.898-1.857a.416.416 0 0 0 .09-.317C19.9 18.944 19.106 15 12 15s-7.9 3.944-7.989 4.826a.416.416 0 0 0 .091.317z" fill="#000000"/></svg>                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Topbar;
