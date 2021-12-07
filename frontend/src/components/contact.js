import React from 'react';
import "../styles/contact.css";
import ContactUs from './contactEmail';

const Contact = ()=> {

    return <div className="containerContactAll"> 
    <div className="backgroundContact"></div>
    <div className="contactContainer">
    <h1 className="contactTittle">Contact me</h1>
    <ContactUs/>
    </div>
    </div>
}



export default Contact;