import './App.css';
import React from 'react';
import Login from './Components/Login';
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

export default App;
