import React from 'react'
import { createBrowserRouter, Outlet, RouterProvider, useLocation } from "react-router-dom"
import About from './About'
import './Components.css'
import Home from './Home'
import LoginSignup from './LoginSignup'
import Navbar from './Navbar'
import Privacy from './Privacy'

const Layout = () => {
    const location = useLocation();

    return (
        <>
            <Navbar />
            <Outlet />

        </>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "Home", element: <Home /> },
            { path: "Privacy", element: <Privacy /> },
            { path: "About", element: <About /> },
            { path: "LoginSignup", element: <LoginSignup /> },
        ]
    }
])

const Hero = () => {
    return (
        <>

            <RouterProvider router={router} />
        </>
    )
}

export default Hero
