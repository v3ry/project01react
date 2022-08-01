import '../style.css';
import Form from 'react-bootstrap/Form';
import React, { useState, useEffect,useContext } from 'react'
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import jwt_decode from "jwt-decode";

function AddEditReceipt(props) {
  const [apiRecipes, setApiRecipes] = useState([]);
  const [messages, setMessages] = useState([]);
  const [refresh, setRefresh] = useState([]);
  const [num,setNum]= useState(0);
  // const { isOnline, setIsOnline } = useContext(UserContext);
  const [name, setName] = useState('');
  const [token, setToken] = useState('');
  const [expire, setExpire] = useState('');
  const [users, setUsers] = useState([]);
  const [pwr,setPwr] = useState(0)
  const history = useNavigate();
  const { id } = useParams();
  console.log(props.edit);
  useEffect(() => {
    axios
      .get(`http://82.65.82.1:4002/api/items/${id}`)
      .then((data) => setApiRecipes(data.data))
      // gestion des erreurs
      .catch((error) =>
        console.warn(`Authorization failed : ${error.message}`)
      );
  }, []);
  const cat = document.querySelector(".aa")
  const tit = document.querySelector(".bb")
  const img = document.querySelector(".cc")
  const txtP = document.querySelector(".dd")
  const txtIng = document.querySelector(".ee")
  const txtRec = document.querySelector(".ff")
  if(props.edit && apiRecipes && tit){
    cat.value = apiRecipes.cat
    tit.value = apiRecipes.title
    img.value = apiRecipes.img
    txtP.value = apiRecipes.txtPreview
    txtIng.value = apiRecipes.txtIngr
    txtRec.value = apiRecipes.txtRec
    console.log(apiRecipes.title);
  }

  useEffect(() => {
    refreshToken();
}, [refresh]);
const resetValue = ()=>{
  cat.value = ""
  tit.value = ""
  img.value = ""
  txtP.value = ""
  txtIng.value = ""
  txtRec.value = ""
}
const refreshToken = async () => {
    try {
        const response = await axios.get('http://82.65.82.1:4002/token');
        setToken(response.data.accessToken);
        console.log(jwt_decode(response.data.accessToken))
        const decoded = jwt_decode(response.data.accessToken);
        setName(decoded.name);
        setExpire(decoded.exp);
        setPwr(decoded.power)
        
    } catch (error) {
        if (error.response) {
            history("/");
        }
    }
}
console.log("name :    " + name)
const axiosJWT = axios.create();

axiosJWT.interceptors.request.use(async (config) => {
    const currentDate = new Date();
    if (expire * 1000 < currentDate.getTime()) {
        const response = await axios.get('http://82.65.82.1:4002/token');
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        setToken(response.data.accessToken);
        const decoded = jwt_decode(response.data.accessToken);
        setName(decoded.name);
        setExpire(decoded.exp);
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});


  const update = ()=>{
    const headers = {
      headers: {Authorization: `Bearer ${token}`,sendBy:apiRecipes.createdBy}
  };
  const msg = {cat: cat.value, title: tit.value, img: img.value, txtPreview: txtP.value, txtIngr: txtIng.value, txtRec: txtRec.value,publication_date:"2022-01-01",sendBy:name};
  console.log("adding " + name);
  cat.value && tit.value && img.value && txtP.value &&axios
  .put(`http://82.65.82.1:4002/api/items/${apiRecipes.id}`, msg,headers)
  .then(response => console.log({ articleId: response.data.response.insertId }))
  .then(history("/"))
  .catch((error) =>
    console.warn("erreur : " + error)
  );
  }


  const add = ()=>{
    const headers = {
        headers: {Authorization: `Bearer ${token}`}
    };
    const msg = {cat: cat.value, title: tit.value, img: img.value, txtPreview: txtP.value, txtIngr: txtIng.value, txtRec: txtRec.value,publication_date:"2022-01-01", createdBy:name};
    console.log("adding " + name);
    cat.value && tit.value && img.value && txtP.value &&axios
    .post(`http://82.65.82.1:4002/api/items`, msg,headers)
    .then(response => console.log({ articleId: response.data.response.insertId }))
    .then(()=>history("/"))
    .catch((error) =>
      console.warn("erreur : " + error)
    );
  }
  return (
    <div className="Main">
      
      <h3>{props.edit ? "Edition Recette":"Ajout Recette"}</h3> 
      <Form>
        
        <Form.Label>Categorie</Form.Label>
        <Form.Select className="aa" aria-label="Default select example">
          <option value="0">Sucrée</option>
          <option value="1">Salée</option>
        </Form.Select>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Titre</Form.Label>
          <Form.Control type="text" rows={3} placeholder="Titre" className="bb"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Image</Form.Label>
          <Form.Control type="text" rows={3} className="cc"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>{`Text preview (séparateur ",")`}</Form.Label>
          <Form.Control as="textarea" rows={5} className="dd"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>{`Ingredient (séparateur ",")`}</Form.Label>
          <Form.Control as="textarea" rows={5} className="ee"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>{`Recette (séparateur ",")`}</Form.Label>
          <Form.Control as="textarea" rows={6} className="ff"/>
        </Form.Group>
        <Button id="bLogin" variant="success">{props.edit ? "Update":"Ajout Recette"}</Button>
      </Form>
      <Button variant="success" onClick={()=>props.edit ? update():add()}>{props.edit ? "Update":"Ajout Recette"}</Button>
    </div>
  );
}

export default AddEditReceipt;

//   const updateClick = (id)=>{
//     const headers = {
//         headers: {Authorization: `Bearer ${token}`}
//     };
    
//     pwr === 1 && axios
//     .put(`http://82.65.82.1:4002/api/contact/${idd.value}`,
//     {
//     name:nam.value,
//     mail:email.value,
//     Subject:sub.value,
//     Message:mess.value},
//     headers

//     )
//     .then((data) => console.log(data.data))
//     .then(setNum(1))
//     // gestion des erreurs
//     .catch((error) =>setNum(2)
//     )
//     // .catch(setNum(2))
//     // .then(window.location.reload(false));

//     setRefresh(!refresh)
//     window.location.reload(false)
// }
