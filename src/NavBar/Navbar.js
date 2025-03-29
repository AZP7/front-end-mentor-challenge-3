import React, { useState } from 'react'
import logo from '../assests/shared/logo.svg'
import './NavBar.css'
import { Route, Routes, Link, useLocation } from 'react-router-dom'
import HomePage from '../HomePage/HomePage'
import Destination from '../Destination/Destination'
import Crew from '../Crew/Crew'
import Technology from '../Technology/Technology'

export default function Navbar() {
  const location = useLocation();
  
  return (
    <>
        <nav className="navbar" >
            <logo className="logo"><img src={logo} alt="logo" /></logo>
            <ul className="ul">
                <li className={ location.pathname ==='/' ? 'activePage' : ''}><Link to="/">00 HOME</Link></li>
                <li className={ location.pathname ==='/destination' ? 'activePage' : ''}><Link to="/destination">01 DESTINATION</Link></li>
                <li className={ location.pathname ==='/crew' ? 'activePage' : ''}><Link to="/crew">02 CREW</Link></li>
                <li className={ location.pathname ==='/technology' ? 'activePage' : ''}><Link to="/technology">03 TECHNOLOGY</Link></li>
            </ul>
        </nav>

        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/destination' element={<Destination/>} />
            <Route path='/crew' element={<Crew/>} />
            <Route path='/technology' element={<Technology/>} />
        </Routes>
    </>
  )
}
