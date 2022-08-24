import React,{useEffect} from "react";
import { Routes, Route} from "react-router-dom";
import './App.css';
import MyHeader from './components/MyHeader';
import Footer from './components/Footer';
import Accueil from './components/Accueil';
import Contact from "./components/Contact";
import Sucree from "./components/Sucree";
import Salee from "./components/Salee";
import ContactViewer from "./components/ContactViewer";
import 'bootstrap/dist/css/bootstrap.min.css';
import RecipViewer from "./components/RecipViewer";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import axios from "axios";
import UserContext from "./contexts/UserContext"
import AddEditReceipt from "./components/AddEditRecip";
axios.defaults.withCredentials = true;

function App() {
  const [pseudo, setPseudo] = React.useState("");
  const [power, setPower] = React.useState("");
  const [myToken, setMyToken] = React.useState("");
  const [userId, setUserId] = React.useState(0);
  const loggedIn = window.localStorage.getItem("loggedIn")
  const userName = window.localStorage.getItem("name")
  // setPseudo(window.localStorage.getItem("name"))
  useEffect(() => {
    setPseudo(window.localStorage.getItem("name"))
    setMyToken(window.localStorage.getItem("token"))
    setUserId(window.localStorage.getItem("userId"))
    setPower(window.localStorage.getItem("power"))
  }, []);
  // console.log("pseudo :   " + pseudo + " power :   " + power + "  userID :   " + userId)
  return (
    <div className="App">
      <UserContext.Provider value={{ pseudo: pseudo, setPseudo: setPseudo ,power: power, setPower: setPower,myToken: myToken, setMyToken: setMyToken,userId:userId,setUserId:setUserId }}>
        <MyHeader/>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="contact" element={<Contact />} />
        <Route path="sucree" element={<Sucree />} />
        <Route path="salee" element={<Salee />} />
        <Route path="contactv" element={<ContactViewer/>} />
        <Route path="recipv" element={<RecipViewer/>} />
        <Route path="login" element={<Login/>} />
        <Route path="register" element={<Register/>} />
        <Route path="recipe/:id" element={<AddEditReceipt edit={true}/>} />
        <Route path="recipe" element={<AddEditReceipt edit={false}/>} />
        <Route path="dashboard" element={<Dashboard/>} />
        
      </Routes>
      </UserContext.Provider>
      <Footer/>
    </div>
  );
}
export default App;
