import React,{useState} from 'react'
import './Technology.css'
import launchVehiclePotrait from '../assests/technology/image-launch-vehicle-portrait.jpg';
import launchVehicleLandscape from '../assests/technology/image-launch-vehicle-landscape.jpg';
import spaceCapsulePotrait from '../assests/technology/image-space-capsule-portrait.jpg';
import spaceCapsuleLandscape from '../assests/technology/image-space-capsule-landscape.jpg';
import spacePortPotrait from '../assests/technology/image-spaceport-portrait.jpg';
import spacePortLandscape from '../assests/technology/image-spaceport-landscape.jpg';
import useResponsiveMobile from '../hooks/useResponsiveMobile'


const spaceShip = [
  {
   Name : 'LAUNCH VEHICLE',
   Image : [launchVehiclePotrait,launchVehicleLandscape],
   Details: `A launch vehicle or carrier rocket is a rocket-propelled vehicle 
    used to carry a payload from Earth's surface to space, usually to 
    Earth orbit or beyond. Our WEB-X carrier rocket is the most 
    powerful in operation. Standing 150 metres tall, it's quite an 
    awe-inspiring sight on the launch pad!`
  },
  {
    Name:'SPACEPORT',
    Image : [spacePortPotrait,spacePortLandscape],
    Details: `A spaceport or cosmodrome is a site for launching (or 
    receiving) spacecraft, by analogy to the seaport for ships or 
    airport for aircraft. Based in the famous Cape Canaveral, our 
    spaceport is ideally situated to take advantage of the Earth’s 
    rotation for launch.`

  },
  {
    Name:'SPACE CAPSULE',
    Image : [spaceCapsulePotrait,spaceCapsuleLandscape],
    Details: `A space capsule is an often-crewed spacecraft that uses a 
    blunt-body reentry capsule to reenter the Earth's atmosphere 
    without wings. Our capsule is where you'll spend your time 
    during the flight. It includes a space gym, cinema, and plenty of 
    other activities to keep you entertained.`
  }

]


export default function Technology() {

  const [changeShip, setChangeShip] = useState(1);
  const [fade, setFade] = useState(false);

  function handleSpaceShipPage(number){
    setChangeShip(number);
    setFade(true);
    setTimeout(() => setFade(false), 600);
  }

  return (
    <div className="Technology" >

        <div className="technology_info">

          <h3><span>03 </span>SPACE LAUNCH 101</h3>

          <div className="technology_details">

              <div className="technology_buttons">
                  <span onClick={() => handleSpaceShipPage(1)} className = {changeShip === 1 ? 'activeShip' : null}>1</span>
                  <span onClick={() => handleSpaceShipPage(2)} className = {changeShip === 2 ? 'activeShip' : null}>2</span>
                  <span onClick={() => handleSpaceShipPage(3)} className = {changeShip === 3 ? 'activeShip' : null}>3</span>
                </div>
                
                <div className="technology_content">
                    <h2 className = {fade? 'fadeIn' : null }>THE TERMINOLOGY…</h2>
                    <h1 className = {fade? 'fadeIn' : null }>{spaceShip[changeShip-1].Name}</h1>
                    <pre className = {fade? 'fadeIn' : null }>{spaceShip[changeShip-1].Details}</pre>
                </div>

          </div>

        </div>

        <div className="technology_photo">
            <img src={spaceShip[changeShip-1].Image[0]} alt="launch vehicle" className = {fade? 'fadeIn' : null } />
        </div>


    </div>
  )
}
