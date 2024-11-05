import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import Forgot from "./pages/Forgot.jsx";
import Login from "./components/Login.jsx";


import { ToastContainer } from "react-toastify";
import UserDashboard from "./pages/UserDashboard.jsx";
import Profile from "./components/Profile.jsx";
import Signup from "./pages/signup.jsx";
import PostDetails from "./pages/PostDetails.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,

//     children: [ // this is known as nesting routing
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "services",
//         element: <Services />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]); // createBrowserRouter is an method takes an array and inside that we have to gave the path

// 2nd wway for routing is

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
        <Route path="posts/:postId" element={<PostDetails/> } />
      </Route  >
      
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContainer />
    <RouterProvider router={router} />
  </StrictMode>
);
