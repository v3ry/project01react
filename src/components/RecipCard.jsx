import '../style.css';
import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import axios from 'axios';

function RecipCard({recipe,pseudo,power,token}) {
    const [open, setOpen] = useState(false);
    let num = 0
    

    const opening = (id)=>{
        const recettePreview = document.querySelector(`#rec${recipe.id}`);
        console.log(num);
        if (open === false){
            setOpen(true);
            recettePreview.classList.add("displayRecette");
            recettePreview.lastElementChild.classList.remove("recetteFull")
        }else{
            setOpen(false);
            recettePreview.classList.remove("displayRecette")
            recettePreview.lastElementChild.classList.add("recetteFull"); //recacher le texte
        }
    }

    const deletClick = (id)=>{
        const headers = {
            headers: {Authorization: `Bearer ${token}`}
        };
        console.log(id);
        axios
        .delete(`http://82.65.82.1:4002/api/items/${id}`,headers)
        .then((data) => console.log(data.data))
        // gestion des erreurs
        .catch((error) =>
          console.warn(`Authorization failed : ${error.message}`)
        )
        .then(window.location.reload(false));
        console.warn("desactivated for security");
    }
  return (
    <div className="ttete">
        <div className={`recettePreview`} id={`rec${recipe.id}`}>
            <div className="preview">
            <img src={recipe.img} alt="recette pas brisé" onClick={()=>opening(num)} className={"img-thumbnail btn-secondary"}/>
            <div className="zoneTextPreview">
            <h3 className="titlePreview">{recipe.title}</h3>
            <ul className="textPreview">
                {recipe.txtPreview.split(",").map((txtPrev,index)=>(
                    <li key={index}>{txtPrev}</li>
                ))}
                
                {/* ))}  */}
                {/* {console.log(recipe.txtPreview)} */}
            </ul>
        </div>
        </div>
            <div className="recetteFull">
                <h3>Ingredients</h3>
                <ul>
                {recipe.txtIngr.split(",").map((txtIng,index)=>(
                    <li key={index}>{txtIng}</li>
                ))}
                </ul>
                <h3>Recette</h3>
                <ol>
                {recipe.txtRec.split(",").map((txtRe,index)=>(
                    <li key={index}>{txtRe}</li>
                ))}
                </ol>
                <p>Updated on {recipe.publication_date}</p>
                <p>Add by {recipe.createdBy}</p>
                {(recipe.createdBy === pseudo || power === 1) && <div>
                    <Link to={`/recipe/${recipe.id}`}><Button variant="success">Edit</Button></Link>
                    {power === 1 && <Button variant="danger" onClick={()=>deletClick(recipe.id)}>Delete</Button>}
                </div>}
            </div>
        </div>
    </div>
  );
}

export default RecipCard;