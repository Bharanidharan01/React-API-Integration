import React from 'react'
import { Link } from 'react-router-dom';
 import './Screen.css';
import 'bootstrap/dist/css/bootstrap.css';
import { FaFeather } from 'react-icons/fa';


function Tweets() {
    return (
        <>
            <div id="main">
                {/*  <div className="top-div"></div> */}
                <div className='middle-div'>
                    <div className='left-div'>
                        <i className="fa-brands fa-twitter"></i>
                    </div>
                    <div className='mid-div'><div style={{ position: "relative" }}>
                        <span>Home</span><div id='home-btn' >
                            <ul className='navbar'>
                            <li><Link to='/home'>My Tweets</Link></li>
                                <li><Link to='/following'>All Tweets</Link></li>
                                <li id='active-tab'><Link to='/tweets'>Tweet</Link></li>
                            </ul>
                        </div>
                        <div id="my-tweets">

                        

                        </div>
                       

                    </div>
                    </div>
                    <div className='right-div'></div>
                </div>
                {/*   <div className='bottom-div'></div> */}
            </div>
        </>
    )
}

export default Tweets;