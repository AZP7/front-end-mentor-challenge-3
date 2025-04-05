import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assests/shared/logo.svg'
import menu from '../assests/shared/icon-hamburger.svg'
import close from '../assests/shared/icon-close.svg'
import './NavBar.css'
import { Route, Routes, Link, useLocation } from 'react-router-dom'
import HomePage from '../HomePage/HomePage'
import Destination from '../Destination/Destination'
import Crew from '../Crew/Crew'
import Technology from '../Technology/Technology'

export default function Navbar() {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const OpenMenu = ()=>{
    setIsMenuOpen(!isMenuOpen);
  }

  const CloseSideBar = ()=>{
    setIsMenuOpen(false);
  }

  const navigate = useNavigate();
  const HandleExplore = ()=>{
    navigate('/');
  }
  const HandleResize = ()=>{
    setIsMobile(window.innerWidth < 550);
  }
  useEffect(()=>{
    HandleResize();
    window.addEventListener('resize', HandleResize);
    return ()=>{
      window.removeEventListener('resize', HandleResize);
    }
  },[])
  
  return (
    <>
        <nav className="navbar" >
          <img src={logo} alt="logo" className="logo" onClick={HandleExplore} />

          {
            isMobile ?
            <img src={menu} alt="menu" onClick={OpenMenu}
            className={`Openmenu ${isMenuOpen ? 'HideMenu' : ''}`}
            />
            : 
            <ul className={isMenuOpen ? "ul" : "ul close"}>
                <li className={ location.pathname ==='/' ? 'activePage' : ''}><Link to="/">00 HOME</Link></li>
                <li className={ location.pathname ==='/destination' ? 'activePage' : ''}><Link to="/destination">01 DESTINATION</Link></li>
                <li className={ location.pathname ==='/crew' ? 'activePage' : ''}><Link to="/crew">02 CREW</Link></li>
                <li className={ location.pathname ==='/technology' ? 'activePage' : ''}><Link to="/technology">03 TECHNOLOGY</Link></li>
            </ul>
          }
          <div className={`responsive_nav ${isMenuOpen ? 'display' : ''}`}>
              <img src={close} alt="close" onClick={OpenMenu}/>

              <ul className="responsive_ul">
                <li className={ location.pathname ==='/' ? 'activeBar' : ''} onClick={CloseSideBar}><Link to="/">00 HOME</Link></li>
                <li className={ location.pathname ==='/destination' ? 'activeBar' : ''} onClick={CloseSideBar}><Link to="/destination">01 DESTINATION</Link></li>
                <li className={ location.pathname ==='/crew' ? 'activeBar' : ''} onClick={CloseSideBar}><Link to="/crew">02 CREW</Link></li>
                <li className={ location.pathname ==='/technology' ? 'activeBar' : ''} onClick={CloseSideBar}><Link to="/technology">03 TECHNOLOGY</Link></li>
              </ul>
          </div>
          
            
            
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
