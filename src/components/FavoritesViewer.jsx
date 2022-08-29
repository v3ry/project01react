import '../style.css';
import React, { useState, useEffect,useContext } from 'react'
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';

import favorite from "../imgs/fav.svg"
import emptyFav from "../imgs/favEmpty.svg"

function FavoritesViewer({token,pseudo}) {
  const [apiFav, setApiFav] = useState([]);

  useEffect(() => {
    axios
      .get(`http://82.65.82.1:4002/api/favorites/${pseudo}`)
      .then((data) => setApiFav(data.data))
      // gestion des erreurs
      .catch((error) =>
        console.warn(`Authorization failed : ${error.message}`)
      );
  }, [pseudo]);

  return (
    <div className="favorites">
        <h2>Favoris:</h2>
        {apiFav.length ===0 ? "No recipe found":""}
        {console.log(apiFav)}
    </div>
  );
}

export default FavoritesViewer;