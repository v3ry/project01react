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
        <Route path="/" element={<Home />} />
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
function Home() {
  return (
    <div className="App">
      
      <Accueil/>
      
    </div>
  );
}
function About() {
  return (
    <div className="App">
      <MyHeader/>
      <Contact/>
      <Footer/>
    </div>
  );
}
// function GoSucree() {
//   return (
//     <div className="App">
//       <MyHeader/>
//       <Sucree />
//       <Footer/>
//     </div>
//   );
// }
// function GoSalee() {
//   return (
//     <div className="App">
//       <MyHeader/>
//       <Salee/>
//       <Footer/>
//     </div>
//   );
// }
export default App;
