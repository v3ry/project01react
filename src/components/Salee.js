import '../style.css';
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import RecipCard from './RecipCard';

function Salee() {
    const [apiRecipes, setApiRecipes] = useState([]);
    
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
                {apiRecipes && apiRecipes.map(rec=>( 
                <RecipCard key={rec.id} recipe={rec}/>
            ))}
    </div>
    </div>
  );
}

export default Salee;