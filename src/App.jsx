// import React from 'react'

import Footer from "./components/Footer";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Login from "./components/Login";
// import Signup from './pages/Signup';
import About from "./pages/About";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserDashboard from "./pages/UserDashboard";

// const App = () => {
//   return (
//     <div>App</div>
//   )
// }

// export default App

const App = () => {
  return (
    <>
      {/* {<UserDashboard />} */}
      {/* <Login /> */}
      {/* <Signup/>  */}
      {/* <Header/> */}
      {/* <Footer/> */}
    </>
  );
};

// const appRouter = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,

//   },

// ])

export default App;
