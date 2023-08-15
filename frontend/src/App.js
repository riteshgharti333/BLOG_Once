import React from 'react'
import {BrowserRouter ,  Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home'
import Topbar from './component/topbar/Topbar'
import Register from './register/Register'
import Login from './pages/login/Login'
import Settings from './pages/settings/Settings'
import Single from './pages/single/Single'
import Write from './pages/write/Write'
import { useContext } from 'react';
import { Context } from './context/Context';
import "./app.css"


const App = () => {

  const {user} = useContext(Context);

  return (
    <div className="app">

  
    <BrowserRouter>
    <Topbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/register" element={user ? <Home/> : <Register />} />

        <Route path="/login" element={user ? <Home/>  :
        <Login />} />

        <Route path="/write" element={user ? <Write/> :
        <Register />} /> 

        <Route path="/settings" element={user ? <Settings /> : <Register/> } />

        <Route path="/post/:postId" element={<Single />} />


      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
