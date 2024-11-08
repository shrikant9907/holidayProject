// import React from 'react'

import Footer from "./components/Footer";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Home from "./pages/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserDashboard from "./pages/UserDashboard";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Forgot from "./pages/Forgot";
import PostDetailsPage from "./pages/BlogDetailsPage";
import Protected from "./components/Protected";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import ProductPage from "./pages/ProductPage";

// const auth = JSON.parse(localStorage.getItem("signupData"));

// const isLoggedIn = auth;
// console.log(isLoggedIn);



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
      <Route path="contact" element={<Contact />} />
      <Route path="forgot" element={<Forgot />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="user" element={<UserDashboard />} >
        <Route path="posts/:postId" element={<PostDetailsPage/> } />
      </Route  >
      
    </Route>
  )
);

const App = () => {
  return (<RouterProvider router={router}/> );
};

export default App;
