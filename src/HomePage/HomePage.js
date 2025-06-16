import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './HomePage1.css'
import MobileImage from '../assests/home/background-home-mobile.jpg'
import Tabletimage from '../assests/home/background-home-tablet.jpg'
import DesktopImage from '../assests/home/background-home-desktop.jpg'




export default function HomePage() {
    const [isHover, setIsHover] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const navigate = useNavigate();

    const handleExplore = () => {
        navigate('/destination');
    };
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
        <section className="Home_Page d-flex flex-column flex-lg-row container-fluid p-0 "
        style={{backgroundImage: `url(${isMobile ? MobileImage : DesktopImage})`}}
        >
              {/* text section */}

            <div 
            className="space_intro d-flex flex-column justify-content-end align-items-center align-items-lg-start col-12 col-lg-6 m-0 ">
                <h3
                className='mt-3'
                >SO, YOU WANT TO TRAVEL TO</h3>
                <h1
                className='mb-3 mt-3 text-light mt-lg-4 mb-lg-4'
                >SPACE</h1>
                <p
                className='mb-4 text-center text-lg-start ps-2 pe-2 col-12 col-md-9'
                >
                    Let's face it; if you want to go to space, you might as well genuinely go
                    to outer space and not hover kind of on the edge of it. Well, sit back,
                    and relax because we'll give you a truly out of this world experience!
                </p>
            </div>
              {/* button section */}

            <div className="explore col-12 col-lg-6 row justify-content-center align-items-lg-end pb-lg-5 align-items-center p-0 m-0">
                <div 
                    className={`btn_container ${isHover ? 'hovered' : ''}`}
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                >
                    <button className="explore_btn" onClick={handleExplore}>EXPLORE</button>
                </div>
            </div>
        </section>
//         <section
//   className="Home_Page container-fluid p-0"
//   style={{
//     backgroundImage: `url(${isMobile ? MobileImage : DesktopImage})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     minHeight: '100vh',
//   }}
// >
//   <div className="row m-0 p-0 d-flex flex-column flex-lg-row"> {/* Stack on small, row on lg */}
//     {/* Text Section */}
//     <div className="space_intro d-flex flex-column justify-content-end align-items-center col-12 col-lg-6 m-0 py-5">
//       <h3 className="mt-3">SO, YOU WANT TO TRAVEL TO</h3>
//       <h1 className="mb-3 mt-3 text-light">SPACE</h1>
//       <p className="mb-4 text-center px-3 col-12 col-md-9">
//         Let's face it; if you want to go to space, you might as well genuinely go
//         to outer space and not hover kind of on the edge of it. Well, sit back,
//         and relax because we'll give you a truly out of this world experience!
//       </p>
//     </div>

//     {/* Explore Button */}
//     <div className="explore border col-12 col-lg-6 d-flex justify-content-center align-items-center p-0 m-0 py-5">
//       <div
//         className={`btn_container ${isHover ? 'hovered' : ''}`}
//         onMouseEnter={() => setIsHover(true)}
//         onMouseLeave={() => setIsHover(false)}
//       >
//         <button className="explore_btn" onClick={handleExplore}>EXPLORE</button>
//       </div>
//     </div>
//   </div>
// </section>

    );
}
