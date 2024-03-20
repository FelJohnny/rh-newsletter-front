import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import React from "react";
import NewPost from "./Components/NewPost/NewPost";
import NewUser from "./Components/NewUser/NewUser";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adm" element={<NewPost />} />
          <Route path="/novo-usuario" element={<NewUser/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
