import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './HomePage.css'


export default function HomePage() {
    const [isHover,setIsHover] = useState(false);
    const navigate = useNavigate();

    const handleExplore = () => {
        navigate('/destination');
    };

  return (
    <div className="Home_Page" >

        <div className="space_intro" >

            <h3>SO, YOU WANT TO TRAVEL TO</h3>
            <h1>SPACE</h1>
            <p>
                Let's face it; if you want to go to space, you might as well genuinely go <br />
                to outer space and not hover kind of on the edge of it. Well, sit back, <br />
                and relax because we'll give you a truly out of this world experience!
            </p>

        </div>

        <div className="explore" >
            <div className={`btn_container ${isHover ? 'hovered' : ''}`}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}>

                <button className="explore_btn" onClick={handleExplore}>EXPLORE</button>
            </div>
        </div>
    </div>
)
}
