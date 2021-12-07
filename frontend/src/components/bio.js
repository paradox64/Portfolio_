import React, { useState } from 'react';
import "../styles/bio.css"


const Bio = ()=> {
    const [backGroundX,setX]=useState(-300);
    const [backGroundY,setY]=useState(-100);
    const [positionH1x,setH1x]=useState(0);
    const [positionH1y,setH1y]=useState(0);

    return <div>
        <div className="backGroundImg" onMouseMove={(e)=>{
            setH1x(positionH1x+e.movementX*0.01);
            setH1y(positionH1y+e.movementY*0.01);
            setX(backGroundX-e.movementX*0.1);
            setY(backGroundY-e.movementY*0.1);}}
         style={{backgroundPositionX:backGroundX,backgroundPositionY:backGroundY}}>
        <h1 className="tittle"   style={{transform:`translate(${positionH1x}px, ${positionH1y}px)`}}>Salvador Scafati</h1>
        <h2 className="subtittle"  style={{transform:`translate(${positionH1x*0.5}px, ${positionH1y*0.5}px)`}} > Software Developer</h2>
        </div>
    </div>
}



export default Bio;