import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import React from "react";
import NewPost from "./Components/NewPost/NewPost";
import { GlobalStorage } from "./Components/Context/GlobalContext";
import NewUser from "./Components/NewUser/NewUser";


function App() {
  return (
    <GlobalStorage>
      <BrowserRouter>
      <Header />  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adm" element={<NewPost />} />
          <Route path="/novo-usuario" element={<NewUser/>} />
        </Routes>
      </BrowserRouter>
    </GlobalStorage>
  );
}

export default App;
