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
axios.defaults.withCredentials = true;

function App() {
  const [isOnline, setIsOnline] = React.useState("");
  return (
    <div className="App">
      <MyHeader/>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="contact" element={<Contact />} />
        <Route path="sucree" element={<Sucree />} />
        <Route path="salee" element={<Salee />} />
        <Route path="contactv" element={<UserContext.Provider value={{ isOnline: isOnline, setIsOnline: setIsOnline }}><ContactViewer/></UserContext.Provider>} />
        <Route path="recipv" element={<RecipViewer/>} />
        <Route path="login" element={<Login/>} />
        <Route path="register" element={<Register/>} />
        
        <Route path="dashboard" element={<UserContext.Provider value={{ isOnline: isOnline, setIsOnline: setIsOnline }}><Dashboard/></UserContext.Provider>} />
        
      </Routes>
      <Footer/>
    </div>
  );
}
export default App;
