import '../style.css';
import React, { useState, useEffect,useContext } from 'react'
import axios from 'axios';

import favorite from "../imgs/fav.svg"
import emptyFav from "../imgs/favEmpty.svg"

let id 
function Favorites({isFavorite,pseudo,recipId,token,userId}) {
  const [apiFav, setApiFav] = useState([]);
  useEffect(() => {
    axios
      .get(`http://82.65.82.1:4002/api/favorites/${pseudo}`)
      .then((data) => setApiFav(data.data))
      // gestion des erreurs
      .catch((error) =>
        console.warn(`Authorization failed : ${error.message}`)
      );
  }, [pseudo,isFavorite]);
  
  apiFav.forEach(val => {
    console.log("id : " + id + " val.id :" + val.id);
    if(recipId === val.rec_id){
      console.log("c'est du favorisidieilfkhsdjkfvbgvbcnxdbfgn,;vbhxcfj,b");
      console.log(val);
      isFavorite = true;
      id = val.id
      
    }
    console.log("isFavorite : " + isFavorite);
    console.log("recid : " + recipId + "  rec_id  :" + val.rec_id);
  })
  // isFavorite = true
  const deleteFav = ()=>{
    console.log(id);
    axios
    .delete(`http://82.65.82.1:4002/api/favorites/${id}`,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then((data) => console.log(data.data))
    .then(isFavorite = false)
    .then(window.location.reload(false))
    // .then(setNum(1))
    // gestion des erreurs
    .catch((error) =>
        console.warn(`Comment not deleted`)
      )
      setTimeout(function() {
        window.location.reload(false)
      }, 500)
  }
  const addFav = ()=>{
    const headers = {
      headers: {Authorization: `Bearer ${token}`}
  };
  // console.log(userId)
  // const comm = document.querySelector(`.comm${recipId}`)
  // console.log("comm value : " + comm.value)
  // if(comm.value){
  const msg = {rec_id:recipId,usr_id:userId};
  // const addValue = [...comment,{usr_id:userId,rec_id:recipId,comment: comm.value}]
  // console.dir("adding : " + addValue);
  axios
  .post(`http://82.65.82.1:4002/api/favorites`, msg,headers)
  .then(response => console.log(response))
  .catch((error) =>
    console.warn("erreur : " + error)
  );
  setTimeout(function() {
    window.location.reload(false)
  }, 500)
  isFavorite = true;
}
  
  return (
    <div className="favorites">
        {isFavorite ? <img src={favorite} alt="" className='fav' onClick={deleteFav}/> :<img src={emptyFav} alt="" className='emptyFav' onClick={addFav}/>}
        {/* <img src={favorite} alt="" className='fav' onClick={deleteFav}/> */}
    </div>
  );
}

export default Favorites;