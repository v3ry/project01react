import '../style.css';
import React,{useState,useEffect,useContext} from 'react';
import axios from 'axios';
import RecipCard from './RecipCard';
import UserContext from "../contexts/UserContext";

function Salee() {
    const [apiRecipes, setApiRecipes] = useState([]);
    const { pseudo, setPseudo } = useContext(UserContext);
    const { power, setPower } = useContext(UserContext);
    const { myToken, setMyToken } = useContext(UserContext);
    useEffect(() => {
      axios
        .get(`http://82.65.82.1:4002/api/items`)
        .then((data) => setApiRecipes(data.data))
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
                {apiRecipes && apiRecipes
                .filter(cat=> cat.cat === 1)
                .map(rec=>( 
                <RecipCard key={rec.id} recipe={rec} pseudo={pseudo} power={power} token={myToken}/>
            ))}
    </div>
    </div>
  );
}

export default Salee;