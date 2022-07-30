import './ContactViewer.css';
import React,{useState,useEffect} from 'react';
import axios from "axios"

export default function RecipViewer() {
    const [recipes, setRecipes] = useState([]);
    const [refresh, setRefresh] = useState([]);

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
        // .delete(`http://82.65.82.1:4002/api/contact/${id}`)
        // .then((data) => console.log(data.data))
        // // gestion des erreurs
        // .catch((error) =>
        //   console.warn(`Authorization failed : ${error.message}`)
        // )
        // .then(window.location.reload(false));
        console.log("desactivated for security");
        // setRefresh(!refresh)
    }

    // <td><input className='inputCat' type='text'></input></td>
    // <td><input className='inputTitle' type='text'></input></td>
    // <td><input className='inputImg' type='text'></input></td>
    // <td><input className='inputPrev' type='text'></input></td>
    // <td><input className='inputIng' type='text'></input></td>
    // <td><input className='inputRec' type='text'></input></td> 
    // <td><input className='inputDate' type='text'></input></td> 

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
                        <td ><img src={rec.img}></img> </td>
                        <td>{rec.txtPreview}</td>
                        <td>{rec.txtIngr}</td>
                        <td>{rec.txtRec}</td>
                        <td>{rec.publication_date}</td>
                        <td><button onClick={()=>deletClick(rec.id)}>Delete</button></td>
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
                <tr>
                        <td>X</td>
                        <td><input className='inputCat' type='text'></input></td>
                        <td><input className='inputTitle' type='text'></input></td>
                        <td><input className='inputImg' type='text'></input></td>
                        <td><input className='inputPrev' type='text'></input></td>
                        <td><input className='inputIng' type='text'></input></td>
                        <td><input className='inputRec' type='text'></input></td> 
                        <td><input className='inputDate' type='text'></input></td> 
                        {/* <td><input></input></td>
                        <td><input></input></td>
                        */}
                        <td><button onClick={()=>addClick()}>Add</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
        )
}