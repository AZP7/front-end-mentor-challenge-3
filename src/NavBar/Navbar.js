import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assests/shared/logo.svg'
import menu from '../assests/shared/icon-hamburger.svg'
import close from '../assests/shared/icon-close.svg'
import './NavBar.css'
import {Link, useLocation } from 'react-router-dom'

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
    setIsMobile(window.innerWidth < 768);
  }
  useEffect(()=>{
    HandleResize();
    window.addEventListener('resize', HandleResize);
    return ()=>{
      window.removeEventListener('resize', HandleResize);
    }
  },[])
  
  return (
    
        <nav 
        className="navbar w-100 d-flex justify-content-between bg-transparent align-items-center position-fixed top-0 z-1" 
        >
          <img src={logo} alt="logo" className="logo mt-2 ms-3" onClick={HandleExplore} />

          {
            isMobile ?
            <>
              <img src={menu} alt="menu" onClick={OpenMenu}
              className={`Openmenu ${isMenuOpen ? 'HideMenu' : ''}`}
              />
              <div 
              className=
              {`responsive_nav w-50 vh-100 position-fixed top-0 ${isMenuOpen ? 'display' : ''}`}>

                    <div className='closebtn  pt-4 pb-2 pe-4 w-100 d-flex justify-content-end'>
                        <img src={close} alt="close" onClick={OpenMenu}
                        style={{width:'30px',height:'30px'}}/>
                    </div>

                    <ul>
                      <li className={`mt-3 mb-5${ location.pathname ==='/' ? 'activeBar' : ''}`} onClick={CloseSideBar}>
                          <Link to="/" className='text-decoration-none text-light'>00 HOME</Link>
                      </li>
                      <li className={`mt-5 mb-5${ location.pathname ==='/destination' ? 'activeBar' : ''}`} onClick={CloseSideBar}>
                          <Link to="/destination" className='text-decoration-none text-light'>01 DESTINATION</Link>
                      </li>
                      <li className={`mt-5 mb-5${ location.pathname ==='/crew' ? 'activeBar' : ''}`} onClick={CloseSideBar}>
                          <Link to="/crew" className='text-decoration-none text-light'>02 CREW</Link>
                      </li>
                      <li className={ `mt-5 mb-5${location.pathname ==='/technology' ? 'activeBar' : ''}`} onClick={CloseSideBar}>
                          <Link to="/technology" className='text-decoration-none text-light'>03 TECHNOLOGY</Link>
                      </li>
                    </ul>
                    
              </div>
            </>
            : 
            <ul className=" ul d-flex align-items-center justify-content-center col-md-10 col-lg-6">
                <li className={ location.pathname ==='/' ? 'activePage' : ''}><Link to="/">00 HOME</Link></li>
                <li className={ location.pathname ==='/destination' ? 'activePage' : ''}><Link to="/destination">01 DESTINATION</Link></li>
                <li className={ location.pathname ==='/crew' ? 'activePage' : ''}><Link to="/crew">02 CREW</Link></li>
                <li className={ location.pathname ==='/technology' ? 'activePage' : ''}><Link to="/technology">03 TECHNOLOGY</Link></li>
            </ul>
          }
          
            
            
        </nav>


  )
}
