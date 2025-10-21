import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Button from './components/Button.jsx'
import BookCard from './components/BookCard.jsx'
import Section from './components/Section.jsx'
import NavbarComponent from './components/Navbar.jsx'
import Footer from "./components/Footer.jsx";


function App() {
  

  return (
    <div>
      <NavbarComponent/>
      <Button/>
      <BookCard/>
      <Section/>
      <Footer/>
    </div>
  )
}

export default App
