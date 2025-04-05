import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './NavBar/Navbar';
import HomePage from './HomePage/HomePage';
import Destination from './Destination/Destination';
import Crew from './Crew/Crew';
import Technology from './Technology/Technology';
import './App.css';

export default function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </>
  );
}
