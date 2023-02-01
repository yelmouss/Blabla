
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { React, useEffect, useState } from "react";

import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/home";
import Gpt from "./components/gpt";
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
          path="/Gpt"
          element={<Gpt dark={dark} updateDark={updateDark} />}
        />
      </Routes>

      <Routes>
        <Route
          path="/"
          element={<Home dark={dark} updateDark={updateDark} />}
        />
      </Routes>
      <Footer dark={dark} updateDark={updateDark} />
    </div>
  );

}

export default App;
