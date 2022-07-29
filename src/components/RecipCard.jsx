import '../style.css';
import React,{useState,useEffect} from 'react';

function RecipCard({recipe}) {
    const [open, setOpen] = useState(false);
    const recettePreview = document.querySelectorAll(".recettePreview");
    const opening = ()=>{
        if (open === false){
            setOpen(true);
            recettePreview[recipe.id-1].classList.add("displayRecette");
            recettePreview[recipe.id-1].lastElementChild.classList.remove("recetteFull")
        }else{
            setOpen(false);
            recettePreview[recipe.id-1].classList.remove("displayRecette")
            recettePreview[recipe.id-1].lastElementChild.classList.add("recetteFull"); //recacher le texte
        }
    }
  return (
    <div className="ttete">
        <div className="recettePreview">
            <div className="preview">
            <img src={recipe.img} alt="Image recette pas brisé" onClick={opening}/>
            <div className="zoneTextPreview">
            <h3 className="titlePreview">{recipe.title}</h3>
            <ul className="textPreview">
                {recipe.txtPreview.split(",").map((txtPrev,index)=>(
                    <li key={index}>{txtPrev}</li>
                ))}
                
                {/* ))}  */}
                {console.log(recipe.txtPreview)}
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
            </div>
        </div>
    </div>
  );
}

export default RecipCard;