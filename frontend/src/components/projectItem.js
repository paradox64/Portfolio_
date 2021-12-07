import React, { useState } from 'react';
import "../styles/projectItem.css";


const ProjectItem = ({name,about,imageSrc,linkGithub,linkDemo})=> {
    const [posAbout,setPos]=useState(500)
    


    return <div onMouseLeave={()=>setPos(500)}  onMouseEnter={()=>setPos(0)} className="projectItem" style={{backgroundImage: `url(${imageSrc})`}}>
        <h1 className="tittleProject">{name}</h1> 
        <p><a href={linkGithub}>
        <img className="icon" alt="gitIcon" src="https://pngimg.com/uploads/github/github_PNG40.png"/>
        </a></p>
        <p><a href={linkDemo}>
        <img className="icon" alt="codeIcon" src="https://cdn1.iconfinder.com/data/icons/black-round-web-icons/100/round-web-icons-black-40-512.png"/>
        </a></p>
        <h3 style={{transform:`translateY(${posAbout}px`}} className="about">{about}</h3>
    </div>
}



export default ProjectItem;