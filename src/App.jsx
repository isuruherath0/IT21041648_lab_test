import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { useMemo } from "react";
import { useSelector } from "react-redux";

import Home from './pages/Home';
import Book from './pages/Book';
import User from './pages/User';

function App() {


  return (
    <div className="app">
      <BrowserRouter>
          <Routes>
            <Route path="/">
            <Route path="" element={<Home />} />    
              <Route path="books" element={<Book />} />
              <Route path="users" element={<User />} />
            </Route>
            
            {/* <Route path="*" element={<Navigate to="/" />} /> */}
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
