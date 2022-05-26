import * as React from "react";
import ReactDOM from 'react-dom/client';
import { Routes, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import MyHeader from './components/MyHeader';
import Footer from './components/Footer';
import Accueil from './components/Accueil';
import Contact from "./components/Contact";
import Sucree from "./components/Sucree";
import Salee from "./components/Salee";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<About />} />
        <Route path="sucree" element={<GoSucree />} />
        <Route path="salee" element={<GoSalee />} />
      </Routes>
    </div>
  );
}
function Home() {
  return (
    <div className="App">
      <MyHeader/>
      <Accueil/>
      <Footer/>
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
function GoSucree() {
  return (
    <div className="App">
      <MyHeader/>
      <Sucree />
      <Footer/>
    </div>
  );
}
function GoSalee() {
  return (
    <div className="App">
      <MyHeader/>
      <Salee/>
      <Footer/>
    </div>
  );
}
export default App;
