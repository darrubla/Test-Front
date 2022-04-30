import React from 'react'
import {
  Routes,
  Route,
  BrowserRouter,
  Outlet,
} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';


import Home from './pages/Home'
import Login from './pages/Login'
import Detail from './pages/Detail'
import Favorites from './pages/Favorites'
import Register from './pages/Register'
import Layout from './containers/Layout'

import 'react-toastify/dist/ReactToastify.css';

export default function RoutesComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Login />} />
        <Route element={<Layout> <Outlet /> </Layout >}>
          <Route path="/home" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/pokemon/:name" element={<Detail />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
    </BrowserRouter>
  )
}
