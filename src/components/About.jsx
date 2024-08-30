import React, { useRef } from 'react'
import Navbar from './Navbar'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import "./Components.css"

gsap.registerPlugin(useGSAP);

const About = () => {
    const abt = useRef();
    useGSAP(()=>{
        gsap.fromTo(".about-container",
            {scale:0},
            {scale:1, duration:1}
        )
    })
    return (
        <>
        <Navbar></Navbar>
            <div className="about-container">
                This is the about page!!
            </div>
        </>
    )
}

export default About
