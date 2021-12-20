import React, { useEffect, useState } from 'react';
import "../styles/projects.css"
import ProjectItem from './projectItem';


const Projects = ()=> {
    const [projectData,setPrData]=useState([]);

    useEffect(()=>{
        setPrData([
            {name:"Memory Game",
            about:"The memory game is a board game with a specific deck of cards. The objective is to find the pairs with the same printed figure using memory",
            imageSrc:(process.env.PUBLIC_URL +"/memorySite.png"),
            linkGithub:"https://github.com/paradox64/Memory-Game",
            linkDemo:"https://memory-game-salvador-scafati.netlify.app/"},
            {name:"Pokemon Searcher",
            about:"The objective of this web application is to search for pokemon and obtain information about them. To achieve this, I use a public API that contains the information pokemon.",
            imageSrc:(process.env.PUBLIC_URL +"/pokemonSite.png"),
            linkGithub:"https://github.com/paradox64/PKM_FINDER",
            linkDemo:"https://pokemonsearchersalvadorscafati.netlify.app/"},
        ])
    },[])
    
    return <div>
        <h1 className="ProjectTitle">Projects</h1>
        <div className="containerProjects">
        {projectData.map((e)=>{
        return <ProjectItem  
            key={e.name}
            name={e.name} 
            about={e.about} 
            imageSrc={e.imageSrc}  
            linkGithub={e.linkGithub}
            linkDemo={e.linkDemo}  
        ></ProjectItem>})}
    </div>
    </div>
}



export default Projects;