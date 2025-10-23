import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Button from './components/Button.jsx'
import BookCard from './components/BookCard.jsx'
import Section from './components/Section.jsx'
import NavbarComponent from './components/Navbar.jsx'
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Books from "./pages/Books.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import Delivery from "./pages/DeliveryPage.jsx";


function App() {
  

  return (
    <div>
      <NavbarComponent/>
      <Home/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path = "/Home" element = {<Books/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path = "/delivery" element = {<Delivery/>}/>
      </Routes>
      <Button/>
      <BookCard/>
      <Section/>
      <Footer/>
    </div>
  )
}

export default App
