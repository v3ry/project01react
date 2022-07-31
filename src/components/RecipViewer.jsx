import './ContactViewer.css';
import React,{useState,useEffect} from 'react';
import axios from "axios"
import Button from 'react-bootstrap/Button';
import Notif from './Notif';

export default function RecipViewer() {
    const [recipes, setRecipes] = useState([]);
    const [refresh, setRefresh] = useState([]);
    const [bool,setBool]= useState(false);
    useEffect(() => {
      axios
        .get(`http://82.65.82.1:4002/api/items`)
        .then((data) => setRecipes(data.data))
        // gestion des erreurs
        .catch((error) =>
          console.warn(`Authorization failed : ${error.message}`)
        );
    }, [refresh]);

    const deletClick = (id)=>{
        // console.log(id);
        // axios
        // .delete(`http://82.65.82.1:4002/api/items/${id}`)
        // .then((data) => console.log(data.data))
        // // gestion des erreurs
        // .catch((error) =>
        //   console.warn(`Authorization failed : ${error.message}`)
        // )
        // .then(window.location.reload(false));
        // setRefresh(!refresh)
        console.warn("desactivated for security");
    }

    const addClick = ()=>{

        const cat = document.querySelector(".inputCat")
        const tit = document.querySelector(".inputTitle")
        const img = document.querySelector(".inputImg")
        const pre = document.querySelector(".inputPrev")
        const ing = document.querySelector(".inputIng")
        const rec = document.querySelector(".inputRec")
        const dat = document.querySelector(".inputDate")

        const msg = {cat: cat.value, title: tit.value, img: img.value, txtPreview: pre.value, txtIngr: ing.value, txtRec: rec.value,publication_date: dat.value};
        // {name:nam.value,mail:email.value,Subject:sub.value,Message:mess.value}
        cat.value && tit.value && img.value && pre.value &&axios
        .post(`http://82.65.82.1:4002/api/items`, msg)
        .then(response => console.log({ articleId: response.data.response.insertId }))
        .catch((error) =>
          console.warn("erreur : " + error)
        );
    }

    recipes&&console.log(recipes)
    return(
        <div className="Main messageViewer">
            <h2 className='display-8'>Recette Viewer</h2>
            <table className={"table table-striped table-dark table-hover rounded"}>
                <thead className={"rounded"}>
                <tr>
                    <th>ID</th>
                    <th>Category</th>
                    <th>Title</th>
                    <th>Image</th>
                    <th>Text Preview</th>
                    <th>Text Ingredients</th>
                    <th>Text Recette</th>
                    <th>Publication</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {recipes && recipes.map((rec,index)=>(
                    <tr key={rec.id}>
                        <td>{rec.id}</td>
                        <td>{rec.cat}</td>
                        <td >{rec.title}</td>
                        <td ><img src={rec.img} alt="recette"></img> </td>
                        <td>{rec.txtPreview}</td>
                        <td>{rec.txtIngr}</td>
                        <td>{rec.txtRec}</td>
                        <td>{rec.publication_date}</td>
                        <td><Button variant="outline-danger" onClick={()=>deletClick(rec.id)}>Delete</Button></td>
                    </tr>
                    ))}
                {recipes[0] === undefined ? <tr><td>No more recipe</td><td>X</td><td>X</td><td>X</td><td>X</td><td>X</td></tr>:""}

                </tbody>
            </table>
            <table className={"table table-striped table-dark table-hover rounded"}>
                <thead className={"rounded"}>
                <tr>
                    <th>ID</th>
                    <th>Category</th>
                    <th>Title</th>
                    <th>Image</th>
                    <th>Text Preview</th>
                    <th>Text Ingredients</th>
                    <th>Text Recette</th>
                    <th>Publication</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                <tr className="addrecipe">
                        <td>X</td>
                        <td><input className='inputCat' type='text'></input></td>
                        <td><input className='inputTitle' type='text'></input></td>
                        <td><textarea className='inputImg' type='text'></textarea></td>
                        <td><textarea className='inputPrev' type='text'></textarea></td>
                        <td><textarea className='inputIng' type='text'></textarea></td>
                        <td><textarea className='inputRec' type='text'></textarea></td> 
                        <td><textarea className='inputDate' type='text'></textarea></td> 
                        <td><Button onClick={()=>addClick()} variant="outline-success">Add</Button></td>
                    </tr>
                </tbody>
            </table>
        </div>
        )
}