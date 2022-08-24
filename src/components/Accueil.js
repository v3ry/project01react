import '../style.css';
import React, {useState,useEffect,useContext } from 'react'
import axios from 'axios';
import UserContext from "../contexts/UserContext";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Accueil() {
    const [apiNews, setApiNews] = useState([]);
    const { myToken, setMyToken } = useContext(UserContext);
    const {pseudo, setPseudo} = useContext(UserContext);
    const [power, setPower] = useState([]);
    const [boolEdit, setBoolEdit] = useState(false);
    const [idEdit, setIdEdit] = useState(0);
    const type = document.querySelector(".aa")
    const date = document.querySelector(".bb")
    const message = document.querySelector(".cc")
    // let boolEdit = false;


    useEffect(() => {
        axios
          .get(`http://82.65.82.1:4002/api/news`)
          .then((data) => setApiNews(data.data.reverse()))
          // gestion des erreurs
          .catch((error) =>
            console.warn(`Authorization failed : ${error.message}`)
          );
          setPower(window.localStorage.getItem("power"))
      }, []);

      // useEffect(() => {
        
      // }, []);
  const wait = ()=>{    
    setTimeout(function() {
      window.location.reload(false)
    }, 500)}


  const addNews = () =>{
    const headers = {
      headers: {Authorization: `Bearer ${myToken}`}
    };
    const msg = {date: date.value,postedBy:pseudo,message:message.value,type:type.value};
    console.log("adding " + pseudo);
    console.log(date.value && pseudo&& message.value && type.value ? "true":"false");
  
    date.value && pseudo && message.value && type.value &&axios
      .post(`http://82.65.82.1:4002/api/news`, msg,headers)
      // .then(response => console.log({ articleId: response.data.response.insertId }))
      .then(wait())
      // .then(()=>history("/"))
      .catch((error) =>
        console.warn("erreur : " + error)
      );
  }
  const stopEdit = (news) =>{
    type.value = 0
    date.value = ""
    message.value = "";
    setIdEdit(0)
    setBoolEdit(false)
  }
  const editClick = (news) =>{
    type.value = news.type
    date.value = news.date
    message.value = news.message;
    setIdEdit(news.id)
    setBoolEdit(true)
  }
  const editNews = (news) =>{
    console.log(idEdit);
    const headers = {
      headers: {Authorization: `Bearer ${myToken}`}
    };
    const msg = {date: date.value,postedBy:pseudo,message:message.value,type:type.value};
    date.value && pseudo && message.value && type.value && axios
  .put(`http://82.65.82.1:4002/api/news/${idEdit}`, msg,headers)
  .then(response => console.log({ articleId: response.data.response.insertId }))
  // .then(history("/"))
  .catch((error) =>
    console.warn("erreur : " + error)
  );
  }

  const deletClick = (id)=>{
    const headers = {
      headers: {Authorization: `Bearer ${myToken}`}
    };
    console.log(id);
    axios
      .delete(`http://82.65.82.1:4002/api/news/${id}`,headers)
      .then((data) => console.log(data.data))
      .then(wait())
      // gestion des erreurs
      .catch((error) =>
        console.warn(`Authorization failed : ${error.message}`)
      )

      setTimeout(function() {
        window.location.reload(false)
      }, 500)
      // console.warn("desactivated for security");
  }



// console.log(myToken);
  return (
    <div className="Main">
        
        <h1>Accueil</h1>
        <p className="blocAccueil">
            Bienvenue sur mon site<br/>
            Je l'ai créé pour vous partager facilement les recettes et gâteaux que je partage 
            régulièrement avec vous.
            Le plaisir culinaire allant avec le gras, vous retrouverez pas mal de recettes
            plus ou moins caloriques ^^.<br/>
            En vous souhaitant une bonne navigation sur le site et surtout n'hésitez pas à m'envoyer
            un petit message pour que je rajoute une recette ou me passer vos variantes.
        </p>
        <h2>News</h2>
        <div className="blocNews">
  
            {apiNews && apiNews.reverse().map(news=>(
                <div key={news.id}>
                    <h4>{news.date}</h4>
                    {news.message.split("|").map((mess,index)=><p key={index}>{mess}</p>)}
                    {power == 1 && <Button variant="danger" onClick={()=>deletClick(news.id)}>Remove</Button>}
                    {power == 1 && <Button variant="success" onClick={()=>editClick(news)}>Edit</Button>}
                </div>
            ))}
        </div>
        
            {power == 1 && 
                <div className="adminNews">
                    <h4>Admin Zone</h4>
                    <Form>
        
        <Form.Label>Categorie</Form.Label>
        <Form.Select className="aa" aria-label="Default select example">
          <option value="0">Défaut</option>
        </Form.Select>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Date/Titre</Form.Label>
          <Form.Control type="text" placeholder="Date" className="bb"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>{`Message (séparateur "|")`}</Form.Label>
          <Form.Control as="textarea" rows={6} className="cc"/>
        </Form.Group>
        <Button id="addNews" variant="success" onClick={boolEdit?()=>editNews(idEdit):addNews}>{boolEdit ? "Edit News":"Add News"}</Button>
        {boolEdit && <Button id="stopEdit" variant="danger" onClick={stopEdit}>Stop Edit</Button>}
      </Form>
      
      {/* <Button variant="success" onClick={()=>props.edit ? update():add()}>{props.edit ? "Update":"Ajout Recette"}</Button> */}
                </div>}
        
        
    </div>
  );
}

export default Accueil;