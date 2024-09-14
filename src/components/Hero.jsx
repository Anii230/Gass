import React from 'react'
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom"
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Auth from './Auth'
import './Components.css'
import { AnimatePresence } from 'framer-motion'

const Layout = () => {
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
            { path: "About", element: <About /> },
            { path: "About", element: <About /> },
            { path: "Auth", element: <Auth /> },
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
