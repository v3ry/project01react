import '../style.css';
import Button from 'react-bootstrap/Button';
import UserContext from "../contexts/UserContext";
import React, {useContext } from 'react'
import { Link } from "react-router-dom";

function MyHeader() {
  const { pseudo, setPseudo } = useContext(UserContext);

  
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
          <Link to="/dashboard"><Button id="bLogin" variant="success">{pseudo === ""?"Login":pseudo}</Button></Link>
            </div>
        <div className="buttonBlock">
            <div className="button">
                <Link to="/"><img src="/imgs/baniere.jpg" alt="bouton accueil"/></Link>
                <h2 id="bAccueil">Accueil</h2>
            </div>
            <div className="button">
                <Link to="/sucree"><img src="/imgs/croissant.jpg" alt="bouton recette sucré"/></Link>
                <h2 id="bSucree">Sucré</h2>
            </div>
            <div className="button">
                <Link to="/salee"><img src="/imgs/pasta.jpg" alt="bouton recette salée"/></Link>
                <h2 id="bSalee">Salé</h2>
            </div>
            <div className="button">
                <Link to="/contact"><img src="/imgs/contact.jpg" alt="bouton contact"/></Link>
                <h2 id="bContact">Contact</h2>
            </div>
        </div>

    </header>

    </div>
  );
}

export default MyHeader;
