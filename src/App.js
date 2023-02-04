
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { React, useEffect, useState } from "react";

import Header from "./components/Template/header";
import Footer from "./components/Template/footer";
import Home from "./components/Pages/home";
import About from "./components/Pages/about";
import Projet from "./components/Pages/projet";
import Service from "./components/Pages/service";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  const [dark, updateDark] = useState(null);
  const ModeDark = JSON.parse(localStorage.getItem("dark"));

  useEffect(()=>{
    if(ModeDark){
      updateDark(ModeDark)
    }
  },[ModeDark])

  return (
    <div className="App col-12">
      <Header dark={dark} updateDark={updateDark} /> 
      <Routes>
        <Route
          path="/"
          element={<Home dark={dark} updateDark={updateDark} />}
        />
         <Route
          path="/About"
          element={<About dark={dark} updateDark={updateDark} />}
        />
            <Route
          path="/Projet"
          element={<Projet dark={dark} updateDark={updateDark} />}
        />
                <Route
          path="/Service"
          element={<Service dark={dark} updateDark={updateDark} />}
        />
      </Routes>
      <Footer dark={dark} updateDark={updateDark} />
    </div>
  );

}

export default App;
