import '../style.css';

function MyHeader() {
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
        <div className="buttonBlock">
            <div className="button">
                <a href="./"><img src="/imgs/baniere.jpg" alt="bouton accueil"/></a>
                <h2 id="bAccueil">Accueil</h2>
            </div>
            <div className="button">
                <a href="./sucree"><img src="/imgs/croissant.jpg" alt="bouton recette sucré"/></a>
                <h2 id="bSucree">Sucré</h2>
            </div>
            <div className="button">
                <a href="../salee"><img src="/imgs/pasta.jpg" alt="bouton recette salée"/></a>
                <h2 id="bSalee">Salé</h2>
            </div>
            <div className="button">
                <a href="./contact"><img src="/imgs/contact.jpg" alt="bouton contact"/></a>
                <h2 id="bContact">Contact</h2>
            </div>
        </div>
    </header>
    </div>
  );
}

export default MyHeader;
