import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import Home from "./pages/Home";
import Books from "./pages/Books";
import BookDetails from "./pages/BookDetails";
import Delivery from "./pages/Delivery";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./admin/Dashboard";
import BookManager from "./admin/BookManager";
import BookList from "./admin/BookList";
import BookRequestQueue from "./admin/BookRequestQueue";
import UserManager from "./admin/UserManager";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <NavbarComponent />
        <Routes>
          {/* Public */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* User Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/books" element={<Books />} />
            <Route path="/book/:id" element={<BookDetails />} />
            <Route path="/delivery" element={<Delivery />} />
          </Route>

          {/* Admin Routes */}
          <Route element={<AdminRoute />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/book-manager" element={<BookManager />} />
            <Route path="/admin/book-list" element={<BookList />} />
            <Route path="/admin/book-queue" element={<BookRequestQueue />} />
            <Route path="/admin/users" element={<UserManager />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
