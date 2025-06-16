import React,{useState} from 'react'
import './Technology.css'
import launchVehiclePotrait from '../assests/technology/image-launch-vehicle-portrait.jpg';
import launchVehicleLandscape from '../assests/technology/image-launch-vehicle-landscape.jpg';
import spaceCapsulePotrait from '../assests/technology/image-space-capsule-portrait.jpg';
import spaceCapsuleLandscape from '../assests/technology/image-space-capsule-landscape.jpg';
import spacePortPotrait from '../assests/technology/image-spaceport-portrait.jpg';
import spacePortLandscape from '../assests/technology/image-spaceport-landscape.jpg';
import ForMediaPhoto from '../Technology/ForMediaPhoto'


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

  const IsMobile = ForMediaPhoto();

  const [changeShip, setChangeShip] = useState(1);
  const [fade, setFade] = useState(false);

  function handleSpaceShipPage(number){
    setChangeShip(number);
    setFade(true);
    setTimeout(() => setFade(false), 600);
  }

  return (
    <div className="Technology d-flex p-0 flex-column-reverse flex-lg-row w-100  -danger container-fluid" >

        <div className="technology_info ">

          {
            IsMobile ? null:
            <h3 className='w-100  mb-5'><span>03 </span>SPACE LAUNCH 101</h3>
          }

          <div className="technology_details  flex-lg-row d-flex flex-column justify-content-lg-evenly justify-content-center align-items-center">


              <div className="technology_buttons d-flex  flex-row flex-lg-column justify-content-around align-items-center">
                  <span onClick={() => handleSpaceShipPage(1)} className = {changeShip === 1 ? 'activeShip' : null}>1</span>
                  <span onClick={() => handleSpaceShipPage(2)} className = {changeShip === 2 ? 'activeShip' : null}>2</span>
                  <span onClick={() => handleSpaceShipPage(3)} className = {changeShip === 3 ? 'activeShip' : null}>3</span>
              </div>
            
            <div className="technology_content h-auto d-flex flex-column justify-content-center align-items-center">
                    <h2 className = {fade? 'fadeIn' : null }>THE TERMINOLOGY…</h2>
                    <h1 className = {fade? 'fadeIn' : null }>{spaceShip[changeShip-1].Name}</h1>
                    {
                      IsMobile ? 
                    <p className = {fade? 'fadeIn' : null }>{spaceShip[changeShip-1].Details}</p>
                    :
                    <pre className = {fade? 'fadeIn' : null }>{spaceShip[changeShip-1].Details}</pre>

                    }
            </div>
          </div>

        </div>

        <div className="technology_photo  m-0 p-0 d-flex flex-column align-items-center align-items-lg-center justify-content-lg-center justify-content-end">

          {
            IsMobile ? 
            <>
            <h3 className='text-light mb-5'><span>03 </span>SPACE LAUNCH 101</h3>
            <img src={spaceShip[changeShip-1].Image[1]} alt="launch vehicle" className = {fade? 'fadeIn' : null } />
            </>
            :
            
          <img src={spaceShip[changeShip-1].Image[0]} alt="launch vehicle" className = {fade? 'fadeIn' : null } />            
          }

        </div>


    </div>
  )
}
