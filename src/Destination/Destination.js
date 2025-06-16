import React , {useState,useEffect} from 'react'
import './Destination.css'
import europa from '../assests/destination/image-europa.png'
import mars from '../assests/destination/image-mars.png'
import moon from '../assests/destination/image-moon.png'
import titan from '../assests/destination/image-titan.png'
import MobileImage from '../assests/destination/background-destination-mobile.jpg'
import DesktopImage from '../assests/destination/background-destination-desktop.jpg'

export default function Destination() {

  const [activePlanet,SetactivePlanet] =  useState(1);
  const [fade, setFade] = useState(false);

  const planet = [moon,mars,europa,titan];

  const planetName = ["MOON", "MARS", "EUROPA", 'TITAN'];
  const planetDistance = ["384,400 KM", "225 MIL. KM", "628 MIL. KM", "1.6 BIL. KM"];
  const planetTravelTime = ["3 DAYS", "6 MONTHS", "6.5 MONTHS", "7 YEARS"];
  
  const handlePlanet = (planetNumber) => {
    SetactivePlanet(planetNumber);
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
    <section className="Destination_page d-flex flex-column flex-lg-row container-fluid p-0" 
            style={{backgroundImage: `url(${isMobile ? MobileImage : DesktopImage})`}}>

                    <div className="planet_ d-flex flex-column w-100 justify-content-center  align-items-center ">
                        <h2 className='text-center opacity-75 fs-1 text-light mb-5 text-md-'><span className='opacity-50 me-4'>01 </span>PICK YOUR DESTINATION</h2>

                        <img src={planet[activePlanet -1 ]} alt="destination planet" className ={`mb-4 ${fade ? 'fade-in' : ''}`} draggable="false" />
                    </div>

                    <div className="destination_ d-flex flex-column align-items-center justify-content-center align-items-lg-start"
                      style= {{color:"#fff",
                              display:"flex",

                      }}
                    >
                      
                        <nav className="nav_ w-100 d-flex justify-content-center justify-content-lg-start align-items-center ps-0">
                           <ul className='d-flex  w-75 align-items-center justify-content-evenly justify-content-lg-between mb-4 ps-0'>
                              <li 
                              onClick={()=> handlePlanet(1)}
                              className={`pb-3 ${activePlanet === 1 ? "activePlanet" : null}`}
                              >
                                MOON
                              </li>

                              <li
                              onClick={()=> handlePlanet(2)}
                              className={`pb-3 ${activePlanet === 2 ? "activePlanet" : null}`}>
                                MARS
                              </li>

                              <li
                              onClick={()=> handlePlanet(3)}
                              className={`pb-3 ${activePlanet === 3 ? "activePlanet" : null}`}>
                               EUROPA
                              </li>

                              <li
                              onClick={()=> handlePlanet(4)}
                              className={`pb-3 ${activePlanet === 4 ? "activePlanet" : null}`}>
                                TITAN
                              </li>

                           </ul>
                        </nav>

                        <h1 className={`planetName_ mb-4 ${fade ? 'fade-in' : ''}`}>{planetName[activePlanet -1 ]}</h1>

                        {activePlanet === 1 ? <p className ={`aboutplanet ${fade ? 'fade-in' : ''}`}>
                          See our planet as you’ve never seen it before.  A perfect <br/>
                          relaxing trip away to help regain perspective and come <br/>
                            back refreshed. While you’re there, take in some history <br/>
                            by visiting the Luna 2 and Apollo 11 landing sites.
                        </p>:null
                        || activePlanet === 2 ? 
                        <p className ={`aboutplanet ${fade ? 'fade-in' : ''}`}>
                          Don’t forget to pack your hiking boots. You’ll need them to <br/>
                          tackle Olympus Mons, the tallest planetary mountain in <br/>
                            our solar system. It’s two and a half times the size of <br/>
                            Everest!
                        </p > : null 
                        || activePlanet ===3 ? 
                      <p className ={`aboutplanet ${fade ? 'fade-in' : ''}`}>
                        The smallest of the four Galilean moons orbiting Jupiter, <br/>
                        Europa is a winter lover’s dream. With an icy surface, it’s <br/> 
                        perfect for a bit of ice skating, curling, hockey, or simple <br/>
                          relaxation in your snug wintery cabin.
                      </p> : null
                      || activePlanet ===4 ? 
                    <p className ={`aboutplanet ${fade ? 'fade-in' : ''}`}>
                      The only moon known to have a dense atmosphere other <br/>
                      than Earth, Titan is a home away from home (just a few <br/> 
                      hundred degrees colder!). As a bonus, you get striking <br/> 
                      views of the Rings of Saturn.
                    </p> : null}
                        
                        <div className ={`distance_time_ d-flex w-100  ${fade ? 'fade-in' : ''}`}>
                              <div className="distance_ d-flex flex-column align-items-center justify-content-center
                                w-50">
                                  <span className='mb-3'>AVG. DISTNACE</span>
                                  <span>{planetDistance[activePlanet - 1]}</span>
                              </div>

                              <div className="time_ d-flex flex-column  align-items-center justify-content-center w-50">
                                  <span className='mb-3'>EST. TRAVEL TIME</span>
                                  <span>{planetTravelTime[activePlanet - 1]}</span>
                              </div>

                        </div>

                    </div>

    </section>
  )
}
