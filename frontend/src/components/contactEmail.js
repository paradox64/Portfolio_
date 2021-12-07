import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';


export const ContactUs = () => {
  const form = useRef();

  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const [colorButton, setColor] = useState("rgb(255, 255, 255)");


  const sendEmail = (e) => {
    e.preventDefault();
    setColor("rgb(255, 226, 95)")
    if (name==="" || mail==="" || message===""){
      alert('Complete all the fields in the form')
    }else{
    emailjs.sendForm('service_dke902q', 'template_qu5k0g9', form.current, 'user_Xtq7ZgZrZSEWBflmeZHkd')
      .then((result) => {
        console.log(result.text)
          if (result.text==="OK"){
            setColor("rgb(119, 245, 161)")
            setTimeout(() => {
              setColor("rgb(255, 255, 255)")
            }, 3000);
          }
      }, (error) => {
        setColor("rgb(230, 87, 141)")
        setTimeout(() => {
          setColor("rgb(255, 255, 255)")
        }, 3000);
          console.log(error.text);
      });}
  };


  return (<div>
    <form ref={form} onSubmit={sendEmail} className="formContact">
      <label className="formLabel">Name</label>
      <input style={{width:`25vh`}} className="formInput" type="text" name="user_name" value={name} onChange={(e)=>setName(e.target.value)}/>
      <label className="formLabel">Email</label>
      <input style={{width:`25vh`}} className="formInput" type="email" name="user_mail" value={mail} onChange={(e)=>setMail(e.target.value)}/>
      <label className="formLabel">Message</label>
      <textarea style={{height:`25vh`}} className="formInput" name="message" value={message} onChange={(e)=>setMessage(e.target.value)}/>
      <input style={{background:colorButton}} className="formButton" type="submit" value="Send" />
    </form>
    </div>
  );
};

export default ContactUs;