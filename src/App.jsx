import React from 'react';
import { createBrowserRouter, Outlet, RouterProvider, useLocation } from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import Explore from './components/Home/Explore/Explore';
import NewHome from './components/Home/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Privacy from './components/Privacy';
import Profile from './components/Profile/Profile';
import Signup from './components/Signup';
import Settings from './components/Home/Settings/Settings';

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
            { path: "Signup", element: <Signup /> }
        ]
    },
    {
        path: "/NewHome",
        element: <NewHome />
    },
    {
        path: "/Profile",
        element: <Profile />
    },
    {
        path: "/Explore",
        element: <Explore />
    },
    {
        path: "/Settings",
        element: <Settings />
    }
]);


const App = () => {
    return (
        <RouterProvider router={router} />
    );
};

export default App;
