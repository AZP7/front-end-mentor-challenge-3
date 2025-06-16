import React, { useState,useEffect } from 'react'
import './Crew.css'
import ansariImage from '../assests/crew/image-anousheh-ansari.png';
import douglasImage from '../assests/crew/image-douglas-hurley.png';
import markImage from '../assests/crew/image-mark-shuttleworth.png';
import victorImage from '../assests/crew/image-victor-glover.png';
import useResponsiveMobile from '../hooks/useResponsiveMobile'

import MobileImage from '../assests/crew/background-crew-desktop.jpg'
import DesktopImage from '../assests/crew/background-crew-mobile.jpg'

export default function Crew() {

  const IsMobile = useResponsiveMobile(); 
    
  const CrewData = [
    {Name : "DOUGLAS HURLEY",
    image : douglasImage,
    bio : 
    `Douglas Gerald Hurley is an American engineer, former Marine Corps 
pilot and former NASA astronaut. He launched into space for the third 
time as commander of Crew Dragon Demo-2.`,
    title : "COMMANDER"
    },
    {Name : "MARK SHUTTLEWORTH",
    image : markImage,
    bio : 
    `Mark Richard Shuttleworth is the founder and CEO of Canonical, the
company behind the Linux-based Ubuntu operating system. 
Shuttleworth became the first South African to travel to space as a 
space tourist.`,
    title : "MISSION SPECIALIST"
    },
    {Name : "VICTOR GLOVER",
    image : victorImage,
    bio : 
    `Pilot on the first operational flight of the SpaceX Crew Dragon to the 
International Space Station. Glover is a commander in the U.S. Navy 
where he pilots an F/A-18.He was a crew member of Expedition 64, 
and served as a station systems flight engineer.`,
    title : "PILOT",
    },
    {Name : "ANOUSHEH ANSARI",
    image : ansariImage,
    bio : 
    `Anousheh Ansari is an Iranian American engineer and co-founder of 
Prodea Systems. Ansari was the fourth self-funded space tourist, the 
first self-funded woman to fly to the ISS, and the first Iranian in space.`,
    title : "FLIGHT ENGINEER"
    }
  ]

  const [crew,setCrew] = useState(0);
  const [fade, setFade] = useState(false);

  
  function handleCrewPage(number){
     setCrew(number);
     setFade(true);
     setTimeout(() => setFade(false), 600);
  }
        const [isMobile, setIsMobile] = useState(false);
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
    <div className="crew_page_ d-flex row flex-column flex-lg-row col-lg-12 container-fluid p-0"
            style={{backgroundImage: `url(${isMobile ? MobileImage : DesktopImage})`}}>


            <div className='crew_info_ d-flex flex-column align-items-center col-lg-6 justify-content-end pb-4 justify-content-lg-center align-content-lg-center'>
                <h3 className='fs-3 text-start mt-3 mb-4 mb-md-0'><span>02</span> MEET YOUR CREW</h3>

                <div className="text">
                    <h2 className={`fs-3 text-center mt-3 mt-md-0 mb-3 ${fade ? 'fadeIn' : null}`}>{CrewData[crew].title}</h2>
                    <h1 className={`fs-2 text-center ${fade ? 'fadeIn' : null}`}>{CrewData[crew].Name}</h1>
                    {
                        IsMobile ? 
                        <p className={`mobileParagraph mb-4 ${fade ? 'fadeIn' : null}`}>{CrewData[crew].bio}</p> :
                        
                        <pre className={fade ? 'fadeIn' : null}>{CrewData[crew].bio}</pre>
                    }
                </div>

                <nav className="w-100 mt-4  d-flex justify-content-center align-align-items-center">
                    <ul className='navBtn d-flex justify-content-evenly bg-transparent'>
                        <li onClick ={() => handleCrewPage(3)} className={`${crew ===3 ? 'active' : ''}`}></li>
                        <li onClick ={() => handleCrewPage(1)} className={`${crew ===1 ? 'active' : ''}`}></li>
                        <li onClick ={() => handleCrewPage(2)} className={`${crew ===2 ? 'active' : ''}`}></li>
                        <li onClick ={() => handleCrewPage(0)} className={`${crew ===0 ? 'active' : ''}`}></li>
                    </ul>

                </nav>
            </div>

            <div className='crew_photo_ d-flex col-lg-6 justify-content-center align-items-start align-items-lg-center'>                 
                <img className={`crew_image col-10 col-sm-6 col-md-4 ${fade ? 'fadeIn' : null}`} src={CrewData[crew].image} alt="crew photo" />
            </div>
            
    </div>
  )
}
