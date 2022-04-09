import React from 'react';
import "../styles/about.css"

const About = ()=> {

    return<div id="about" className="containerAboutAll"> 
    <div className="aboutContainer" >
        <h1 className='contactTitle'>
            Experience
        </h1>
        <div className='iconSection'>
        <img  className='iconExp' id="js-icon" alt="icon" src="https://camo.githubusercontent.com/5e4e512a9fba4d33300fa431e2c5fb07d476d5f15194bc75dfbf3da545f73e43/68747470733a2f2f63646e2e69636f6e73636f75742e636f6d2f69636f6e2f667265652f706e672d3235362f6a6176617363726970742d323735323134382d323238343936352e706e67"/>
        <img className='iconExp' id="react-icon"alt="icon" src="http://assets.stickpng.com/images/584830f5cef1014c0b5e4aa1.png"/>
        <img className='iconExp' id="html-icon" alt="icon" src={process.env.PUBLIC_URL +"/html-png.png"}/>
        <img className='iconExp' id="css-icon" alt="icon" src={process.env.PUBLIC_URL +"/css-png.png"}/>
        <img className='iconExp' id="sql-icon" alt="icon" src={process.env.PUBLIC_URL +"/sql-png.png"}/>
        <img className='iconExp' id="node-icon" alt="icon" src={process.env.PUBLIC_URL +"/node-png.png"}/>
        <img className='iconExp' id="java-icon" alt="icon" src={process.env.PUBLIC_URL +"/java-png.png"}/>
        </div>
    </div>
    <div className="backgroundAbout"></div>
    </div>
}



export default About;