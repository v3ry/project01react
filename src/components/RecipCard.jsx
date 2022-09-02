import '../style.css';
import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import axios from 'axios';
import Review from './Review';
import Comment from './Comment';
import Favorites from './Favorites';

function RecipCard({recipe,pseudo,power,token,apiReview,userId}) {
    const [open, setOpen] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
    let haveVoted = false;
    let num = 0;
    let note = 0;
    let noteWeb = 0;

    
      const updateUsrReview = ()=>{
        let moy = 0;
        let count = 0;
        apiReview && apiReview.forEach(review =>{
            if(recipe.id === review.recId && review.reviewType === 0) {
                count++
                console.log(`note pour ${recipe.id} est de ${review.review}`)
                moy+= parseFloat(review.review)
                // note = parseFloat(review.review)
                // setUsrReview(note)
                // save()
            }
        })
        if(moy!==0){
            note = moy / count
        }
    
    }
    const updateWebReview = ()=>{
        let moy = 0;
        let count = 0;

        apiReview && apiReview.forEach(review =>{
            // console.log("recipe id : " + recipe.id + " review recid: "+review.recId);
            if(recipe.id === review.recId && review.reviewType === 1) {
                count++
                // console.log(`note pour ${recipe.id} est de ${review.review}`)
                moy+= parseFloat(review.review)
                // note = parseFloat(review.review)
                // setUsrReview(note)
                // save()
                // console.log(`REVIEW user ${review.userId} userID ${userId}`);
                // console.log(typeof(userId));
            }
            
            if(recipe.id === review.recId && review.userId === parseInt(userId)){
                haveVoted = true
                // console.log(`user ${userId} has already vote for ${review.recId}`);
            }
        })
        if(moy!==0){
            noteWeb = moy / count
        }
    
    }
    updateUsrReview();
    updateWebReview();

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
        // console.warn("desactivated for security");
    }
  return (
    <div className="ttete">
        <div className={`recettePreview`} id={`rec${recipe.id}`}>
            <div className="preview">
                <div className="test3">
            <img src={recipe.img} alt="recette pas brisé" onClick={()=>opening(num)} className={"img-thumbnail btn-secondary"}/>
            <Review recipId={recipe.id} note={note} noteWeb={noteWeb} apiReview={apiReview} token={token} haveVoted={haveVoted} userId={userId} />
            <Favorites pseudo={pseudo} isFavorite={isFavorite} recipId={recipe.id} token={token} userId={userId} />
            </div>
            <div className="zoneTextPreview">
                
            <h3 className="titlePreview">{recipe.title}</h3>
            
            <ul className="textPreview">
                {recipe.txtPreview.split(",").map((txtPrev,index)=>(
                    <li key={index}>{txtPrev}</li>
                ))}
                
                {/* ))}  */}
                {/* {console.log(recipe.txtPreview)} */}
            </ul>
            {/* <Review recipId={recipe.id} note={note} noteWeb={noteWeb}/> */}
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
                <Comment userId={userId} token={token} recipId={recipe.id} pseudo={pseudo} power={power} />

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