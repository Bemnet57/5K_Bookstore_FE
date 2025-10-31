import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import Home from "./pages/Home";
import BooksPage from "./pages/Books";
import BookDetails from "./pages/BookDetails";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import DeliveryPage from "./pages/DeliveryPage";
import Dashboard from "./admin/Dashboard";
import BookManager from "./admin/BookManager";
import UserManager from "./admin/UserManager";
import BookRequestQueue from "./admin/BookRequests";
import BookList from "./admin/BookList";
import Footer from "./components/Footer";

import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <NavbarComponent />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<BooksPage />} />
            <Route path="/book/:id" element={<BookDetails />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/delivery" element={<DeliveryPage />} />

            {/* Admin routes */}
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/book-manager" element={<BookManager />} />
            <Route path="/admin/user-manager" element={<UserManager />} />
            <Route path="/admin/book-request-queue" element={<BookRequestQueue />} />
            <Route path="/admin/book-list" element={<BookList />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
