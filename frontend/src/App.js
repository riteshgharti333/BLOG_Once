import React from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Topbar from './component/topbar/Topbar';
import { useContext } from 'react';
import { Context } from './context/Context';
import Home from './pages/home/Home';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Settings from './pages/settings/Settings';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import "./app.css";

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
        { path: '/register', element: user ? <Home /> : <Register /> },
        { path: '/login', element: user ? <Home /> : <Login /> },
        { path: '/write', element: user ? <Write /> : <Register /> },
        { path: '/settings', element: user ? <Settings /> : <Register /> },
        { path: '/post/:postId', element: <Single /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
