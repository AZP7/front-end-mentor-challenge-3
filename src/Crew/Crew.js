import React, { useState } from 'react'
import './Crew.css'
import ansariImage from '../assests/crew/image-anousheh-ansari.png';
import douglasImage from '../assests/crew/image-douglas-hurley.png';
import markImage from '../assests/crew/image-mark-shuttleworth.png';
import victorImage from '../assests/crew/image-victor-glover.png';


export default function Crew() {
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

  return (
    <div className="crew_page">
        <div className='crew_'>
            <div className='crew_info'>
                <h3><span>02</span> MEET YOUR CREW</h3>

                <div className="text">
                    <h2 className={fade ? 'fadeIn' : null}>{CrewData[crew].title}</h2>
                    <h1 className={fade ? 'fadeIn' : null}>{CrewData[crew].Name}</h1>
                    <pre className={fade ? 'fadeIn' : null}>{CrewData[crew].bio}</pre>
                </div>

                <div className="navBtn">

                  <span onClick ={() => handleCrewPage(0)} className={crew ===0 ? 'active' : ''}></span>
                  <span onClick ={() => handleCrewPage(1)} className={crew ===1 ? 'active' : ''}></span>
                  <span onClick ={() => handleCrewPage(2)} className={crew ===2 ? 'active' : ''}></span>
                  <span onClick ={() => handleCrewPage(3)} className={crew ===3 ? 'active' : ''}></span>

                </div>
            </div>

            <div className='crew_photo'>                 
                <img className={`crew_image ${fade ? 'fadeIn' : null}`} src={CrewData[crew].image} alt="crew photo" />
            </div>
            
        </div>
    </div>
  )
}
