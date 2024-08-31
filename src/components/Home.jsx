import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import "./Components.css"

gsap.registerPlugin(useGSAP);

const Home = () => {

    useGSAP(()=>{

        gsap.from(".home-container .home-title", {
            duration: 1.2,
            opacity: 0,
            x: -50,
            ease: "elastic.out(1, 0.3)",
            stagger: 0.1,
            delay: 0.7
        });

        gsap.from(".home-container .home-tagline", {
            duration: 1.2,
            opacity: 0,
            y: 30,
            ease: "elastic.out(1, 0.3)",
            stagger: 0.1,
            delay: 0.8
        });
    })

  return (

    <>
        <div className="home-container">
            <h1 className="home-title">Welcome to Gass</h1>
            <p className="home-tagline">Connect with friends, share moments, and explore new ideas.</p>
            <button className="home-button">Get Started</button>
        </div>
    </>
  )
}

export default Home
