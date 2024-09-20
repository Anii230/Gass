import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
// import transition from '../transition'
import "./Components.css"


const About = () => {
    return (
        <>
        <div className="abt-page">
    <div className="abt-head">
        {/* <h1>About Us</h1> */}
    </div>

    <div className="abt-content">
        <section className="mission">
            <h2>Our Mission</h2>
            <p>
                At GASS, we aim to bring people closer by providing a platform that encourages meaningful conversations, creativity, and community building. Our mission is to ensure that everyone has a voice, and we empower our users by putting their privacy and control first.
            </p>
        </section>

        <section className="values">
            <h2>Core Values</h2>
            <ul>
                <li><strong>Community:</strong> We believe in the power of connection, and our platform is built to nurture genuine communities.</li>
                <li><strong>Privacy:</strong> We take your data and privacy seriously, ensuring top-notch security.</li>
                <li><strong>Inclusion:</strong> GASS is for everyone, regardless of background, culture, or interests.</li>
                <li><strong>Innovation:</strong> We continuously improve, with our users’ experience as our top priority.</li>
            </ul>
        </section>
    </div>

    <footer className="abt-footer">
        <p>&copy; 2024 GASS - All Rights Reserved</p>
    </footer>
</div>

        </>
    )
}

export default About
