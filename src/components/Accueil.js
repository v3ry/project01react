import '../style.css';

function Accueil() {
  return (
    <div className="Main">
        
        <h1>Accueil</h1>
        <p className="blocAccueil">
            Bienvenue sur mon site<br/>
            Je l'ai créé pour vous partager facilement les recettes et gâteaux que je partage 
            régulièrement avec vous.
            Le plaisir culinaire allant avec le gras, vous retrouverez pas mal de recettes
            plus ou moins caloriques ^^.<br/>
            En vous souhaitant une bonne navigation sur le site et surtout n'hésitez pas à m'envoyer
            un petit message pour que je rajoute une recette ou me passer vos variantes.
        </p>
        <h2>News</h2>
        <div className="blocNews">
            <h4>17.05.2022</h4>
            <p>Ajout des recettes sucrées suivantes : <br/>
                -Galette Bretonne<br/>
            <h4>13.05.2022</h4>
            </p>
            <p>Ajout des recettes sucrées suivantes : <br/>
                -Gateaux aux noix<br/>
                -Palets bretons au beurre salé<br/>
                -Mousse au chocolat<br/>
                Ajout des recettes salées suivantes : <br/>
                -Pâte brisée<br/>
                -Baguettes<br/>
                -Gratin de crozets aux courgettes et saumon fumé<br/>
            </p>
        </div>
    </div>
  );
}

export default Accueil;