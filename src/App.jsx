import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import React from "react";
import NewPost from "./Components/NewPost/NewPost";
import { GlobalStorage } from "./Components/Context/GlobalContext";

function App() {
  return (
    <GlobalStorage>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adm" element={<NewPost />} />
        </Routes>
      </BrowserRouter>
    </GlobalStorage>
  );
}

export default App;
