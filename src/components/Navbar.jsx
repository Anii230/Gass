import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import "./Components.css"

gsap.registerPlugin(useGSAP);


const Navbar = () => {
    const nav = useRef();
    useGSAP(()=>{
    // gsap.from(".nav-logo", {
    //     duration: 0.8,
    //     opacity: 0,
    //     y: -50,
    //     ease: "back.out(1.7)"
    // });

    // gsap.from(".nav-other ul li", {
    //     duration: 1.2,
    //     opacity: 0,
    //     y: 30,
    //     ease: "elastic.out(1, 0.3)",
    //     stagger: 0.1,
    //     delay: 0.5
    // });

    gsap.from(".navbar", {
        duration: 1.2,
        opacity: 0,
        y: -10,
        ease: "elastic.out(1.7)",
        delay: 2.5
    });

})

    return (
        <nav className="navbar">
            <div className="nav-logo">
                <a href="#">Gass</a>
            </div>
            <div className="nav-other">
                <ul>
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/Privacy">Privacy</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/LoginSignup"><button>Get Started</button></Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
