import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileImage} from '@fortawesome/free-regular-svg-icons'
import {faUser,faRightToBracket,faBriefcase} from '@fortawesome/free-solid-svg-icons'

import React, { useState } from "react";
import { Link } from "react-router-dom";
import './SideBar.css';

function Sidebar(props) {
    return (
          <nav className={props.sidebar ? "sidebar active" : "sidebar"}>
            <ul >
            <li><Link to="/"><FontAwesomeIcon icon={faUser}   className="icon" />My Profile</Link></li>
            <li><Link to="/"><FontAwesomeIcon icon={faBriefcase}   className="icon"/>Templates</Link></li>
            <li><Link to="/"><FontAwesomeIcon icon={ faFileImage}   className="icon" />My Projects</Link></li>
            <li><Link to="/"><FontAwesomeIcon icon={faRightToBracket}  className="icon" />Logout</Link></li>
             
            </ul>
          </nav>
        // <>
        // {props.sidebar==true?
        // <nav role='navigation'>
        //     <div id="menuToggle">

        //         <input type="checkbox" />

        //         <ul id="menu">
        //             <a href="#"><li>Home</li></a>
        //             <a href="#"><li>About</li></a>
        //             <a href="#"><li>Info</li></a>
        //             <a href="#"><li>Contact</li></a>
        //             <a href="https://erikterwan.com/" target="_blank"><li>Show me more</li></a>
        //         </ul>
        //     </div>
        // </nav>:

        // ''}
        // </>

    );
}

export default Sidebar;