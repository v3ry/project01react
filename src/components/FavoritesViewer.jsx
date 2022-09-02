import '../style.css';
import React, { useState, useEffect,useContext } from 'react'
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';
import RecipCard from "./RecipCard"

import favorite from "../imgs/fav.svg"
import emptyFav from "../imgs/favEmpty.svg"
import { getValue } from '@testing-library/user-event/dist/utils';

let listFavorites = []

function FavoritesViewer({token,pseudo}) {
  const [apiFav, setApiFav] = useState([]);
  const [apiReview, setApiReview] = useState([]);
  // const [apiRecipes, setApiRecipes] = useState([]);
  // const [listFavorites, setListFavorites] = useState([]);
  useEffect(() => {
    axios
      .get(`http://82.65.82.1:4002/api/review`)
      .then((data) => setApiReview(data.data))
      // gestion des erreurs
      .catch((error) =>
        console.warn(`Authorization failed : ${error.message}`)
      );
      // return listFavorites = []
  }, []);

  useEffect(() => {
    axios
      .get(`http://82.65.82.1:4002/api/favorites/${pseudo}`)
      .then((data) => setApiFav(data.data))
      // gestion des erreurs
      .catch((error) =>
        console.warn(`Authorization failed : ${error.message}`)
      );
  }, [pseudo]);

  const getFavoritesRecipes = ()=>{
    // listFavorites = [2]
    console.log(apiFav.length);
    apiFav.forEach((fav,id)=>{
      console.log(fav);
      // const addValue = [...listFavorites,{cat:fav.cat,title:fav.title,img:fav.img}]
      axios
      .get(`http://82.65.82.1:4002/api/items/${fav.rec_id}`)
      // .then((data) => listFavorites.push(data.data))
      .then((data)=> addToList(data.data))
      // .then((data) => console.log(data.data))
      // gestion des erreurs
      .catch((error) =>
        console.warn(`Authorization failed : ${error.message}`)
      );
    })
    console.log(listFavorites);
    console.log(listFavorites.length);

    }
    getFavoritesRecipes()
  const addToList = (val) =>{
    if(listFavorites.includes(val.title)){
      console.log(val.title);
    }else{
    listFavorites.push(val)}
    console.log(val.title);
  }
console.log(listFavorites);
const arrUniq = [...new Map(listFavorites.map(v => [JSON.stringify(v), v])).values()]

console.log(arrUniq);
  // apiFav && getFavoritesRecipes()
  return (
    <div className="favorites">
        <h2>Favoris:</h2>
        {apiFav.length ===0 ? "No recipe found":""}
        {console.log("Favorite lenght : " + listFavorites.length + " fav : " + listFavorites)}
        {arrUniq.map((recip,id)=>(
          <div>
            {console.log("id " + id + "  recipe " + recip)}
          <RecipCard recipe={recip} pseudo={pseudo} token={token} apiReview={apiReview}/>
          </div>
        ))}
        {console.log(apiFav)}
    </div>
  );
}

export default FavoritesViewer;