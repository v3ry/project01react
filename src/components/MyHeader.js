import '../style.css';
import Button from 'react-bootstrap/Button';
import UserContext from "../contexts/UserContext";
import React, {useContext } from 'react'
import { Link } from "react-router-dom";

function MyHeader() {
  const { pseudo, setPseudo } = useContext(UserContext);
  const btnBurger = document.querySelector(".hamburger");
  const btnBlock = document.querySelector(".buttonBlock");
  let burgerOpen = false;
  let ifBurger = false;
  // if (btnBlock) btnBlock.style.display = "none"
  const onBurger = ()=>{
    if (burgerOpen === false){
        btnBlock.style.display = "flex";
        burgerOpen = true;
        ifBurger = true
    }else{
        btnBlock.style.display = "none";
        burgerOpen = false;
    }
};
const resetBurger = ()=>{
if(ifBurger){  
btnBlock.style.display = "none";
burgerOpen = false;}
}
  return (
    <div className="MyHeader">
      <header>
        <img src="/imgs/bandeau.png" alt="Image cuisine baniere" className="mainImg"/>
        <div className="glitch-bloc">
            <h1 className="invisible-text mainTitle">Le Gras C'est La Vie</h1>
            <h1 className="glitchedAnim mainTitle">Le Gras C'est La Vie</h1>
            <h1 className="glitchedAnim mainTitle">Le Gras C'est La Vie</h1>
            <h1 className="glitchedAnim mainTitle">Le Gras C'est La Vie</h1>
          </div>
          <div className="Login">
          <Link to="/dashboard"><Button id="bLogin" variant="success" onClick={resetBurger}>{pseudo === ""||pseudo === null?"Login":pseudo}</Button></Link>
            </div>
        <div className="buttonBlock">
            <div className="button">
                <Link to="/" onClick={resetBurger}><img src="/imgs/baniere.jpg" alt="bouton accueil"/></Link>
                <h2 id="bAccueil">Accueil</h2>
            </div>
            <div className="button">
                <Link to="/sucree" onClick={resetBurger}><img src="/imgs/croissant.jpg" alt="bouton recette sucré"/></Link>
                <h2 id="bSucree">Sucré</h2>
            </div>
            <div className="button">
                <Link to="/salee" onClick={resetBurger}><img src="/imgs/pasta.jpg" alt="bouton recette salée"/></Link>
                <h2 id="bSalee">Salé</h2>
            </div>
            <div className="button">
                <Link to="/contact" onClick={resetBurger}><img src="/imgs/contact.jpg" alt="bouton contact"/></Link>
                <h2 id="bContact">Contact</h2>
            </div>
        </div>
        <img src="/imgs/hamburger.png" alt="" className="hamburger" width={"2rem"} onClick={onBurger}/>
    </header>
    
    </div>
  );
}

export default MyHeader;
