import React, { useContext, useState } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Topbar from './component/topbar/Topbar';
import { Context } from './context/Context';
import Home from './pages/home/Home';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Settings from './pages/settings/Settings';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import "./app.css";
import AboutUs from './pages/aboutUs/AboutUs';
import ContactUs from './pages/contactUs/ContactUs';
import { Cloudinary } from "@cloudinary/url-gen"; // Import Cloudinary

function App() {
  const { user } = useContext(Context);

  const Layout = () => (
    <div className="app">
      <Topbar />
      <Outlet />
    </div>
  );

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/write', element: user ? <Write /> : <Register /> },
        { path: '/aboutUs', element: user ? <AboutUs /> : <Register /> },
        { path: '/contactus', element: user ? <ContactUs /> : <Register /> },
        { path: '/settings', element: user ? <Settings /> : <Register /> },
        { path: '/post/:postId', element: <Single /> },
      ],
    },
    { path: '/register', element: user ? <Home /> : <Register /> },
    { path: '/login', element: user ? <Home /> : <Login /> },
  ]);

  // Create a Cloudinary instance with your cloud name
  const cld = new Cloudinary({ cloud: { cloudName: 'ddmucrojh' } });

  return (
    <RouterProvider router={router}>
      {/* Pass the 'cld' instance as a prop to components that need it */}
      <Outlet cld={cld} />
    </RouterProvider>
  );
}

export default App;
