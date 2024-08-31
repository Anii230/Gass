import React from 'react'
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom"
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import './Components.css'

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
