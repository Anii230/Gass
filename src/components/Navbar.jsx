import React from 'react'
import "./Components.css"

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-logo">
                <a href="#">Logo</a>
            </div>
            <div className="nav-other">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#"><button>Login</button></a></li>
                    <li><a href="#"><button>Signup</button></a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
