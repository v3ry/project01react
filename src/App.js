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


function App() {
  return (
    <div className="App">
      <MyHeader/>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="contact" element={<Contact />} />
        <Route path="sucree" element={<Sucree />} />
        <Route path="salee" element={<Salee />} />
        <Route path="contactv" element={<ContactViewer/>} />
        <Route path="recipv" element={<RecipViewer/>} />
      </Routes>
      <Footer/>
    </div>
  );
}
export default App;
