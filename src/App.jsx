import React from 'react';
import { createBrowserRouter, Outlet, RouterProvider, useLocation } from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Privacy from './components/Privacy';
import Signup from './components/Signup';

const Layout = () => {
    const location = useLocation();

    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "Home", element: <Home /> },
            { path: "Privacy", element: <Privacy /> },
            { path: "About", element: <About /> },
            { path: "Login", element: <Login /> },
            { path: "Signup", element: <Signup /> },
        ]
    }
]);

const App = () => {
    return (
        <RouterProvider router={router} />
    );
};

export default App;
