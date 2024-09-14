import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import transition from '../transition'
import "./Components.css"


const About = () => {
    return (
        <>
        <div className="abt-page">
            <div className="abt-head">
                <h1>About us</h1>
            </div>
        </div>
        </>
    )
}

export default transition(About)
