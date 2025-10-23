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
import Dashboard from "./admin/Dashboard.jsx";
import UserManager from "./admin/UserManager.jsx";
import BookManager from "./admin/BookManager.jsx";
import BookRequestQueue  from "./admin/BookRequests.jsx";
import AdminLayout from "./admin/AdminLayout.jsx";
import BookList from "./admin/BookList.jsx";

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
        <Route path = "/layout" element ={<AdminLayout/>}/>
        <Route path = "/dashboard" element ={<Dashboard/>}/>
        <Route path = "/usermanager" element ={<UserManager/>}/>
        <Route path = "/bookmanager" element ={<BookManager/>}/>
        <Route path = "/booklist" element ={<BookList/>}/>
        <Route path = "/bookrequest" element ={<BookRequestQueue/>}/>

      </Routes>
      <Button/>
      <BookCard/>
      <Section/>
      
      <Footer/>
    </div>
  )
}

export default App
