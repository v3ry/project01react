import '../style.css';
function launch(){
const recettePreview = document.querySelectorAll(".recettePreview");
let myId = 0; //défini une valeur id

recettePreview.forEach(rec=>{   //Boucle dans les previews
    console.log("loop")
    rec.setAttribute("ID",myId ) //ajoute l'attribut ID a chaque élément
    window["bAppear"+myId] = false; //creation de boulean avec ID
    myId++;
    rec.addEventListener("click",function handleClick(event) {
        console.log("click")
        let currentID = rec.getAttribute("ID");//récupere l'id de l'element
        if (window["bAppear"+currentID] === false){
            rec.classList.add("displayRecette");
            let test = rec.lastElementChild; //recupère le dernier enfant de displayRecette
            rec.lastElementChild.classList.remove("recetteFull"); //enlevement de la classe cachant le texte
            window["bAppear"+currentID] = true; //défini la boulean spécifique sur true
        }else{
            rec.classList.remove("displayRecette"); //enlevement de l'affichage complet
            rec.lastElementChild.classList.add("recetteFull"); //recacher le texte
            window["bAppear"+currentID] = false;
}})})
console.log("test")
}

function Sucree() {
  return (
    <div className="Main">
        <h1>Les sucrés</h1>
        <div className="zoneRecettes">
        <div className="recettePreview">
            <div className="preview">
            <img src="./imgs/batonnets-au-noix.jpg" alt="Image recette cookies"/>
            <div className="zoneTextPreview">
            <h3 className="titlePreview">Gateaux aux noix</h3>
            <ul className="textPreview">
                <li>Préparation : 20 min</li>
                <li>Total : 35 min</li>
                <li>Difficulté : 32 portions</li>
                <li>Cout total : 2,46€</li>
                <li>Calorie par portion : 115 kcal</li>
            </ul>
        </div>
        </div>
            <div className="recetteFull">
                <h3>Ingredients</h3>
                <ul>
                    <li>190gr de noix</li>
                    <li>150gr de beurre</li>
                    <li>90gr de sucre en poudre</li>
                    <li>250gr de farine T45 ou T55</li>
                    <li>1 oeufs</li>
                    <li>1 sachet sucre vanillé</li>
                </ul>
                <h3>Recette</h3>
                <ol>
                    <li>Mettre 190 grammes de noix (seulement les cerneaux) dans le robot 
                        et mélanger 15 sec/vitesse 5.</li>
                    <li>Transvaser le contenu du robot dans un récipient puis réserver.</li>
                    <li>Mettre 150 grammes de beurre mou coupés en morceaux dans le robot et mélanger 15 sec/vitesse 3.</li>
                    <li>Ajouter 100 grammes de sucre en poudre dans le robot et mélanger 30 sec/vitesse 3.</li>
                    <li>Ajouter 250 grammes de farine t45, 1 oeuf et 1 cuillère à soupe de rhum ambré ou de l' arôme vanille dans le robot.</li>
                    <li>Ajouter les noix moulues dans le bol du Thermomix .</li>
                    <li>Mélanger 30 sec/vitesse 3. Racler ensuite les parois du bol avec la spatule.</li>
                    <li>Mélanger 20 sec/vitesse 3.</li>
                    <li>Préchauffer le four à 180°C.</li>
                    <li>Déposer la pâte sur le plan de travail puis former une boule, la pâte ne colle pas.</li>
                    <li>Façonner des petits boudins de 25 grammes environ et les poser sur une plaque recouverte de papier cuisson .</li>
                    <li>Inciser le dessus des biscuits.</li>
                    <li>Mettre dans le four mode chaleur tournante pendant 13 min à 180°C.</li>
                    <li>Ajuster le temps de cuisson de quelques minutes selon votre four. Les biscuits doivent être légèrement dorés.</li>
                    <li>Laisser refroidir sur une grille.</li>
                </ol>
            </div>
        </div>
        <div className="recettePreview">
            <div className="preview">
            <img src="./imgs/palets-breton.jpg" alt="Image recette cookies"/>
            <div className="zoneTextPreview">
            <h3 className="titlePreview">Palets bretons au beurre salé</h3>
            <ul className="textPreview">
                <li>Préparation : 10 min</li>
                <li>Total : 1 h 30 min</li>
                <li>Difficulté : 15 portions</li>
                <li>Cout total : 0,83€</li>
                <li>Calorie par portion : 97 kcal</li>
            </ul>
        </div>
        </div>
            <div className="recetteFull">
                <h3>Ingredients</h3>
                <ul>
                    <li>140gr de farine</li>
                    <li>80gr sucre en poudre</li>
                    <li>0.5 sachet levure chimique</li>
                    <li>80gr beurre demi-sel</li>
                    <li>2 oeufs</li>
                    <li>1 c.s. eau</li>
                </ul>
                <h3>Recette</h3>
                <ol>
                    <li>Mettre 140 grammes de farine, 80 grammes de sucre en poudre, 
                        ½ sachet de levure chimique et 80 grammes de beurre demi-sel coupés 
                        en morceaux dans le robot. Donner 1 coup de Turbo programmé sur 2 sec.</li>
                    <li>Ajouter 2 jaunes d'oeufs dans le robot et pétrir 1 min/programme Pétrissage 
                        en ajoutant 1 cuillère à soupe d'eau au bout de 15 secondes par l'orifice du couvercle du robot.</li>
                    <li>Faire un boudin de 25 centimètres avec la pâte.</li>
                    <li>Réserver au frigo, emballé dans un film plastique pendant 60 min.</li>
                    <li>Préchauffer le four à 180°C.</li>
                    <li>Découper des tranches de 1.5 à 2 cm de largeur dans le boudin. .</li>
                    <li>Transvaser dans un moule à muffins huilé et mettre dans le four pendant 15 min à 180°C.</li>
                    <li>Laisser refroidir avant de démouler et de les manger !</li>
                </ol>
            </div>
        </div>
        <div className="recettePreview">
            <div className="preview">
            <img src="./imgs/mousse-au-chocolat.jpg" alt="Image mousse chocolat"/>
            <div className="zoneTextPreview">
            <h3 className="titlePreview">Mousse au chocolat</h3>
            <ul className="textPreview">
                <li>Préparation : 15 min</li>
                <li>Total : 8 h 25 min</li>
                <li>Difficulté : 6 portions</li>
                <li>Cout total : 5,14€</li>
                <li>Calorie par portion : 381 kcal</li>
            </ul>
        </div>
        </div>
            <div className="recetteFull">
                <h3>Ingredients</h3>
                <ul>
                    <li>7 oeufs</li>
                    <li>1 pincée de sel</li>
                    <li>50gr de sucre en poudre</li>
                    <li>300gr de chocolat noir</li>
                    <li>150gr de crème fraîche liquide</li>
                </ul>
                <h3>Recette</h3>
                <ol>
                    <li>Ajouter le fouet.</li>
                    <li>Mettre 7 blancs d'oeufs et 1 pincée de sel dans le robot. Mélanger 6 min 30 sec/vitesse 3 sans le gobelet doseur en ajoutant 50 grammes de sucre en poudre en pluie et très progressivement pendant les 2 dernières minutes par l'orifice du couvercle du robot puis retirer le fouet.</li>
                    <li>Transvaser dans un récipient puis réserver au frigo.</li>
                    <li>Mettre 300 grammes de chocolat noir coupés en morceaux et 150 grammes de crème fraîche liquide dans le robot. Chauffer 4 min/60°C/vitesse 1.</li>
                    <li>Ajouter les 3 jaunes d'oeufs dans le robot et mélanger 20 sec/vitesse 4.</li>
                    <li>Mélanger très délicatement cette préparation avec les blancs en neige avec une spatule.</li>
                    <li>Transvaser dans un saladier puis réserver au frigo pendant 08 h 00 min.</li>
                </ol>
            </div>
        </div>
        <div className="recettePreview">
            <div className="preview">
            <img src="./imgs/galettes_bretonnes.png" alt="Image galette brentonne"/>
            <div className="zoneTextPreview">
            <h3 className="titlePreview">Galette Bretonne</h3>
            <ul className="textPreview">
                <li>Préparation : 20 min</li>
                <li>Total : 35 min</li>
                <li>Portions : 20/30 portions</li>
                <li>Cout total : 2,00€</li>
                <li>Calorie par portion : 96 kcal</li>
            </ul>
        </div>
        </div>
            <div className="recetteFull">
                <h3>Ingredients</h3>
                <ul>
                    <li>250 g de farine</li>
                    <li>1/2 sachet de levure chimique</li>
                    <li>150 g de sucre en poudre</li>
                    <li>1 oeuf et 1 jaune</li>
                    <li>125 g de beurre demi-sel</li>
                    <li>Pour dorer : 1 jaune d'oeuf dilué dans un peu d'eau</li>
                </ul>
                <h3>Recette</h3>
                <ol>
                    <li>Dans un saladier, mélangez la farine, le levure et le sucre.</li>
                    <li>Coupez le beurre en petits morceaux et incorporez-le à la pâte, en l’effritant du bout des doitgs.</li>
                    <li>Incorporez ensuite l’oeuf et un jaune. Formez une boule de pâte, entourez-la de papier plastique et laissez-la reposer 30 min au réfrigérateur.</li>
                    <li>Sur un plan de travail fariné, étalez la pâte avec un rouleau à pâtisserie.</li>
                    <li>Découpez des galettes avec un emporte-pièce de 7 cm. Posez-les sur une plaque à pâtisserie couverte d’un papier sulfurisé.</li>
                    <li>Dorez-les au jaune d’oeuf et dessinez des croisillons avec le dos d’une fourchette.</li>
                    <li>Enfournez environ 15 min dans le four préchauffé à 180 °C.</li>
                </ol>
            </div>
        </div>
    </div>
    <script src="./script.js"></script>
    {launch()}
    </div>
  );

}
launch()
export default Sucree;