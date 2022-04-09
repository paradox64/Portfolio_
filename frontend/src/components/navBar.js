import React from 'react';
import "../styles/navBar.css"



const NavBar = ()=> {

    return <div className="navContainer">
    <ul class="navAllitems">
        <a className='NavBarItem' href={"#about"}>       
            <h1>About</h1>
        </a>
        <a className='NavBarItem' href={"#projects"}>       
            <h1>Projects</h1>
        </a>
        <a className='NavBarItem' href={"#formContact"}>       
            <h1>Contact</h1>
        </a>
        <a className='NavBarItem' href={"https://www.linkedin.com/in/salvador-scafati-0462b41b5/"}>       
            <h1>Linkedin</h1>
        </a>
        <a className='NavBarItem' href={"https://github.com/paradox64"}>       
            <h1>Github</h1>
        </a>
    </ul>
    </div> 
}



export default NavBar;