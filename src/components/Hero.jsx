import React from 'react'
import { RouterProvider, createBrowserRouter, Outlet, useLocation } from "react-router-dom"
import Navbar from './Navbar'
import Home from './Home'
import Privacy from './Privacy'
import About from './About'
import './Components.css'
import transition from '../transition'
import { AnimatePresence } from 'framer-motion'

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
            // { path: "Login", element: <Login /> },
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
