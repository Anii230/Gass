import React from 'react'
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom"
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Login from './Login'
import './Components.css'
import transition from '../transition'
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
            { path: "Login", element: <Login /> },
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
