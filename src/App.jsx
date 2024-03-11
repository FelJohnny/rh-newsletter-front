import './App.css'
import Header from './Components/Header/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';

function App() {

  return (
    <>
      <Header/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
