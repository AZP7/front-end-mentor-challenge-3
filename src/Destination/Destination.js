import React , {useState} from 'react'
import './Destination.css'
import europa from '../assests/destination/image-europa.png'
import mars from '../assests/destination/image-mars.png'
import moon from '../assests/destination/image-moon.png'
import titan from '../assests/destination/image-titan.png'

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
  
  return (
    <div className="destination" >

        <div className="container_" >
              
              <div className="destination_contex"
                  style= {{color:"#fff"}}
              >
                    <div className="planet">
                        <h2><span>01 </span>PICK YOUR DESTINATION</h2>
                        <img src={planet[activePlanet -1 ]} alt="destination planet" className ={` ${fade ? 'fade-in' : ''}`}  />
                    </div>

                    <div className="planet_destination"
                      style= {{color:"#fff",
                              display:"flex",

                      }}
                    >
                      
                        <nav className="nav">
                           <ul>
                              <li 
                              onClick={()=> handlePlanet(1)}
                              className={activePlanet === 1 ? "activePlanet" : null}
                              >
                                MOON
                              </li>

                              <li
                              onClick={()=> handlePlanet(2)}
                              className={activePlanet === 2 ? "activePlanet" : null}>
                                MARS
                              </li>

                              <li
                              onClick={()=> handlePlanet(3)}
                              className={activePlanet === 3 ? "activePlanet" : null}>
                               EUROPA
                              </li>

                              <li
                              onClick={()=> handlePlanet(4)}
                              className={activePlanet === 4 ? "activePlanet" : null}>
                                TITAN
                              </li>

                           </ul>
                        </nav>

                        <h1 className={`planetName ${fade ? 'fade-in' : ''}`}>{planetName[activePlanet -1 ]}</h1>

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
                        
                        <div className ={`distance_time ${fade ? 'fade-in' : ''}`}>
                              <div className="distance">
                                  <span>AVG. DISTNACE</span>
                                  <span>{planetDistance[activePlanet - 1]}</span>
                              </div>

                              <div className="time">
                                  <span>EST. TRAVEL TIME</span>
                                  <span>{planetTravelTime[activePlanet - 1]}</span>
                              </div>

                        </div>

                    </div>


              </div>
        </div>
      
    </div>
  )
}
