import '../style.css';
import React,{useState,useEffect,useContext} from 'react';
import axios from 'axios';
import RecipCard from './RecipCard';
import UserContext from "../contexts/UserContext";

function Sucree() {
    const [apiRecipes, setApiRecipes] = useState([]);
    const { pseudo, setPseudo } = useContext(UserContext);
    const { power, setPower } = useContext(UserContext);
    const { myToken, setMyToken } = useContext(UserContext);
    const { userId, setUserId } = useContext(UserContext);
    const [apiReview, setApiReview] = useState([]);
    
    useEffect(() => {
      axios
        .get(`http://82.65.82.1:4002/api/items`)
        .then((data) => setApiRecipes(data.data))
        // gestion des erreurs
        .catch((error) =>
          console.warn(`Authorization failed : ${error.message}`)
        );
    }, []);
    useEffect(() => {
      axios
        .get(`http://82.65.82.1:4002/api/review`)
        .then((data) => setApiReview(data.data))
        // gestion des erreurs
        .catch((error) =>
          console.warn(`Authorization failed : ${error.message}`)
        );
        
    }, []);

  return (
    <div className="Main">
        <h1>Les sucrés</h1>
        <div className="zoneRecettes">
                {apiRecipes && apiRecipes
                .filter(cat=> cat.cat === 0)
                .map(rec=>( 
                  <RecipCard key={rec.id} recipe={rec} pseudo={pseudo} power={power} token={myToken} apiReview={apiReview} userId={userId} />
            ))}
        </div>
    </div>
  );

}

export default Sucree;