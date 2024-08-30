import React from 'react';
import {RouterProvider,createBrowserRouter} from "react-router-dom"
import Hero from './components/Hero';
import About from './components/About';

const router = createBrowserRouter([
    {path:"/", element:<Hero/>},
    {path:"/About", element:<About/>}
])

const App = () => {
  return (
    <>
        <RouterProvider router={router}/>
    </>
  );
};

export default App;
