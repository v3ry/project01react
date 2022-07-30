import '../style.css';
import React,{useState,useEffect} from 'react';
import axios from "axios"

function Contact() {


  const launchMsg = (e)=>{
    e.preventDefault();
    const nam = document.querySelector("#name")
    const email = document.querySelector("#email")
    const sub = document.querySelector("#subject")
    // const mess = ["blabla1","blabla2","blabla3"]
    const mess = document.querySelector("#message")
    const msg = {name:nam.value,mail:email.value,Subject:sub.value,Message:mess.value}

    nam.value && email.value && sub.value && mess.value &&axios
      .post(`http://82.65.82.1:4002/api/contact`, msg)
      .then(response => console.log({ articleId: response.data.response.insertId }))
      .catch((error) =>
        console.warn(`Authorization failed : ${error.message}`)
      );
  }
  
  return (
    <div className="Main">
        <h1>Contact</h1>
        <form id="contact-form" enctype="multipart/form-data">
            <label id="fname">Nom/Pseudo:</label><br/>
            <input type="text" name="name" id="name" required/><br/>
            <label id="mail">Mail:</label><br/>
            <input type="email" name="mail" id="email" required/><br/>
            <label id="fsujet">Sujet:</label><br/>
            <input type="text" name="Subject" id="subject" required/><br/>
            <label id="fmessage">Message:</label><br/>
            <textarea name="Message" id="message" rows="3" required></textarea><br/>
            <input type="submit" value="Envoyer" id="bSend" onClick={launchMsg}/>
        </form>
    </div>
  );
}

export default Contact;