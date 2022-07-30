import '../style.css';
// import React,{useState,useEffect} from 'react';
import axios from "axios"

function Contact() {

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  const myAlert = document.createElement("div");
  const message = document.createElement("p")
  

  async function sendNotif(myColor, text){

    const currentDiv = document.querySelector(".Main");
    //myAlert style
    myAlert.style.width = "300px";
    myAlert.style.height = "80px";
    myAlert.style.backgroundColor = "red";
    myAlert.style.zIndex = "800";
    myAlert.style.position = "fixed";
    myAlert.style.top = "40%";
    myAlert.style.left = "30%"
    myAlert.style.borderRadius = "11px";
    myAlert.style.display = "none"
    myAlert.style.alignItems = "center"
    message.innerHTML = "Probleme d'envoie, merci de retenter plus tard.";
    message.style.color = "white";
    message.style.textAlign="center";
    message.style.fontWeight = "bolder"
    message.style.fontSize = "20px"
    myAlert.appendChild(message);
    currentDiv.appendChild(myAlert);
    myAlert.style.display = "flex"
    myAlert.style.backgroundColor = myColor;
    message.innerHTML = `${text} ${document.querySelector("#name").value}.`;
    await sleep(5000);
    myAlert.style.display = "none";
  }

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
      .then(()=>sendNotif("green","Message envoyé, merci"))
      .catch((error) =>
        sendNotif("red","Oups le serveur est cassé, désolé")
      );
  }
  
  return (
    <div className="Main">
        <h1>Contact</h1>
        <form id="contact-form" encType="multipart/form-data">
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