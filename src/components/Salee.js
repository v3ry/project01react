import '../style.css';
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import RecipCard from './RecipCard';

function Salee() {
    // const recSalee = [
    //     {
    //         img:"./imgs/pate-brisee.jpg",
    //         txtPreview:["Préparation : 5 min",
    //         "Total : 6 min",
    //         "Difficulté : 1 portions",
    //         "Cout total : 0,90€",
    //         "Calorie par portion : 362 kcal"],
    //         txtIngr:["300gr de farine","1 cc à café","125gr beurre","100gr d'eau"],
    //         txtRec:["Mettre 300 grammes de farine",
    //         "1 cuillère à café de sel", 
    //         "125 grammes de beurre coupés en morceaux et 100 grammes d'eau tiède dans le robot. Pétrir 1 min/programme Pétrissage."]   
    //     }
    // ]

    const [apiRecipes, setApiRecipes] = useState([]);
    

    useEffect(() => {
      axios
        .get(`http://localhost:4002/api/items`)
        .then((data) => setApiRecipes(data.data.response))
        // gestion des erreurs
        .catch((error) =>
          console.warn(`Authorization failed : ${error.message}`)
        );
    }, []);

    apiRecipes && console.log(apiRecipes);
  return (
    <div className="Main">
        <h1>Les salés</h1>
        <div className="zoneRecettes">
            {apiRecipes && apiRecipes.map(rec=>( 
            <RecipCard key={rec.id} recipe={rec}/>
        ))}
        {/* <div className="recettePreview">
            <div className="preview">
            <img src="./imgs/pate-brisee.jpg" alt="Image recette pas brisé"/>
            <div className="zoneTextPreview">
            <h3 className="titlePreview">Pâte brisée</h3>
            <ul className="textPreview">
                <li>Préparation : 5 min</li>
                <li>Total : 6 min</li>
                <li>Difficulté : 1 portions</li>
                <li>Cout total : 0,90€</li>
                <li>Calorie par portion : 362 kcal</li>
            </ul>
        </div>
        </div>
            <div className="recetteFull">
                <h3>Ingredients</h3>
                <ul>
                    <li>"300gr de farine"</li>
                    <li>"1 cc à café"</li>
                    <li>"125gr beurre"</li>
                    <li>"100gr d'eau"</li>
                </ul>
                <h3>Recette</h3>
                <ol>
                    <li>Mettre 300 grammes de farine, 1 cuillère à café de sel, 125 grammes de beurre coupés en morceaux et 100 grammes d'eau tiède dans le robot. Pétrir 1 min/programme Pétrissage.</li>
                    <li>Transvaser le contenu du robot dans un récipient.</li>
                    <li>Pétrir de façon a former une boule.</li>
                    <li>Étaler la pâte sur du papier sulfurisé puis mettre le papier sur le plat.</li>
                </ol>
            </div>
        </div>
        <div className="recettePreview">
            <div className="preview">
            <img src="./imgs/baguettes.jpg" alt="Image recette baguette"/>
            <div className="zoneTextPreview">
            <h3 className="titlePreview">Baguettes</h3>
            <ul className="textPreview">
                <li>Préparation : 20 min</li>
                <li>Total : 6 h 00 min</li>
                <li>Difficulté : 4 portions</li>
                <li>Cout total : 0,53€</li>
                <li>Calorie par portion : 685 kcal</li>
            </ul>
        </div>
        </div>
            <div className="recetteFull">
                <h3>Ingredients</h3>
                <ul>
                    <li>750gr de farine</li>
                    <li>1 sachet de levure de boulanger</li>
                    <li>430gr d'eau</li>
                    <li>2 c.c. de sel</li>
                </ul>
                <h3>Recette</h3>
                <ol>
                    <li>Mettre 430 grammes d'eau et 10 grammes de levure de boulanger fraîche dans le robot. Chauffer 2 min/37°C/vitesse 2.</li>
                    <li>Ajouter 750 grammes de farine t55 et 2 cuillères à café de sel dans le robot. Pétrir 3 min/programme Pétrissage.</li>
                    <li>Transvaser le contenu du robot dans un saladier puis réserver couvert d'un torchon, dans un endroit chaud pendant 02 h 00 min.</li>
                    <li>Diviser la pâte en 4 pâtons et dégazer chacun des pâtons en l'applatissant avec la paume de vos mains.</li>
                </ol>
            </div>
        </div>
        <div className="recettePreview">
            <div className="preview">
            <img src="./imgs/gratin-de-crozets.jpg" alt="Image mousse chocolat"/>
            <div className="zoneTextPreview">
            <h3 className="titlePreview">Gratin de crozets aux courgettes et saumon fumé</h3>
            <ul className="textPreview">
                <li>Préparation : 15 min</li>
                <li>Total : 1 h 10 min</li>
                <li>Difficulté : 4 portions</li>
                <li>Cout total : 11,50€</li>
                <li>Calorie par portion : 568 kcal</li>
            </ul>
        </div>
        </div>
            <div className="recetteFull">
                <h3>Ingredients</h3>
                <ul>
                    <li>1500gr d'eau</li>
                    <li>300gr de crozets</li>
                    <li>2 courgettes</li>
                    <li>1 gousse d'ail</li>
                    <li>20gr d'huile d'olive</li>
                    <li>250gr de saumon fumé</li>
                    <li>1 pincée de sel</li>
                    <li>1 pincée de poivre</li>
                    <li>100gr de crème fraiche liquide</li>
                    <li>80gr de gruyere rapé</li>
                </ul>
                <h3>Recette</h3>
                <ol>
                    <li>Mettre 1500 grammes d'eau salée dans le robot et cuire 10 min 30 sec 120°C vitesse 1.</li>
                    <li>Ajouter 300 grammes de crozets dans le robot et cuire 15 min 90°C vitesse 1.</li>
                    <li>Egoutter.</li>
                    <li>Transvaser dans un plat à gratin beurré.</li>
                    <li>Préchauffer le four à 180°C.</li>
                    <li>Mettre 2 courgettes coupées en morceaux et épluchées et 1 gousse d'ail dans le robot. Mélanger 4 sec/vitesse 4.5.</li>
                    <li>Ajouter 20 grammes d'huile d'olive dans le robot et cuire 5 min/100°C//vitesse 1.</li>
                    <li>Ajouter 250 grammes de saumon fumé coupés en petits morceaux dans le robot et cuire 5 min/100°C/vitesse 1.</li>
                    <li>Ajouter 1 pincée de sel (à ajuster en fonction des goûts) et 1 pincée de poivre (à ajuster en fonction des goûts) dans le robot.</li>
                    <li>Transvaser dans un plat à gratin.</li>
                    <li>Mettre 100 grammes de crème fraîche liquide entière et 40 grammes de gruyère rapé (à ajuster en fonction des goûts) plat à gratin.</li>
                    <li>Mélanger le tout.</li>
                    <li>Mettre 40 grammes de gruyère rapé sur le dessus plat à gratin.</li>
                    <li>Mettre dans le four mode chaleur tournante pendant 20 min à 180°C.</li>
                    <li>Servir chaud.</li>
                </ol>
            </div>
        </div> */}
    </div>
    </div>
  );
}

export default Salee;