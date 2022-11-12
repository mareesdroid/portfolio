import React, { useState } from 'react'
import Navbar from './components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import Footer from './components/Footer';
import Projects from './pages/Projects';
import { MyContextProvider } from './MyContext';
import Loader from './components/Loader'
import Home from './pages/Home';
const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/view-projects",
      element: <Projects />,
    },
  ]);

  return (
    <>
      <MyContextProvider>
      <ToastContainer />
        {/* <Loader /> */}

        <RouterProvider router={router} />
      </MyContextProvider>
    </>
  )

}


export default App;