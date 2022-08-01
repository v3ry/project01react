import * as React from "react";
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
  console.log("pseudo :   " + pseudo)
  console.log("power :   " + power)
  return (
    <div className="App">
      <UserContext.Provider value={{ pseudo: pseudo, setPseudo: setPseudo }}><MyHeader/></UserContext.Provider>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="contact" element={<Contact />} />
        <Route path="sucree" element={<UserContext.Provider value={{ pseudo: pseudo, setPseudo: setPseudo ,power: power, setPower: setPower,myToken: myToken, setMyToken: setMyToken }}><Sucree /></UserContext.Provider>} />
        <Route path="salee" element={<UserContext.Provider value={{ pseudo: pseudo, setPseudo: setPseudo ,power: power, setPower: setPower,myToken: myToken, setMyToken: setMyToken }}><Salee /></UserContext.Provider>} />
        <Route path="contactv" element={<UserContext.Provider value={{ pseudo: pseudo, setPseudo: setPseudo }}><ContactViewer/></UserContext.Provider>} />
        <Route path="recipv" element={<RecipViewer/>} />
        <Route path="login" element={<Login/>} />
        <Route path="register" element={<Register/>} />
        <Route path="recipe/:id" element={<AddEditReceipt edit={true}/>} />
        <Route path="recipe" element={<AddEditReceipt edit={false}/>} />
        <Route path="dashboard" element={<UserContext.Provider value={{ pseudo: pseudo, setPseudo: setPseudo ,power: power, setPower: setPower,myToken: myToken, setMyToken: setMyToken }}><Dashboard/></UserContext.Provider>} />
        
      </Routes>
      <Footer/>
    </div>
  );
}
export default App;
