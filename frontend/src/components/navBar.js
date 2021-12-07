import React from 'react';
import "../styles/navBar.css"



const NavBar = ()=> {

    return <div className="navContainer">
    <ul>
        <li className="NavBarItem" id="homeBar" onClick={()=> window.open("https://www.linkedin.com/in/salvador-scafati-0462b41b5/", "_blank")}>  Linkedin  </li>
        <li className="NavBarItem" id="projectBar" onClick={()=>window.open("https://github.com/paradox64", "_blank")} >Github</li>
    </ul>
    </div> 
}



export default NavBar;