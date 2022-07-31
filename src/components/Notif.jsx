import './ContactViewer.css';
import React,{useState,useEffect} from 'react';
import axios from "axios"
import Button from 'react-bootstrap/Button';

export default function Notif(props) {
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
        message.innerHTML = text;
        message.style.color = "white";
        message.style.textAlign="center";
        message.style.fontWeight = "bolder"
        message.style.fontSize = "20px"
        myAlert.appendChild(message);
        currentDiv.appendChild(myAlert);
        myAlert.style.display = "flex"
        myAlert.style.backgroundColor = myColor;
        // message.innerHTML = `${text} ${document.querySelector("#name").value}.`;
        await sleep(3000);
        myAlert.style.display = "none";
        window.location.reload(false)
      }
      props.alert === "red" ?sendNotif("red","Oups le serveur est cassé, désolé"): sendNotif("green","Message effacé")
    return(
        <div>
            {console.log(props.alert)}
        </div>
    )
        // nam.value && email.value && sub.value && mess.value &&axios
        //   .post(`http://82.65.82.1:4002/api/contact`, msg)
        //   .then(response => console.log({ articleId: response.data.response.insertId }))
        //   .then(()=>sendNotif("green","Message envoyé, merci"))
        //   .catch((error) =>
        //     sendNotif("red","Oups le serveur est cassé, désolé")
        //   );


}