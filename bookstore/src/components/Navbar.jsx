import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/Navbar.css";
import { Navbar as BSNavbar, Nav, Container, Form } from "react-bootstrap";
import { useEffect, useState } from "react";

const NavbarComponent = () => {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.search.value.trim();
    if (query) navigate(`/books?search=${query}`);
  };

  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => setScrolled(window.scrollY > 30);
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <BSNavbar expand="lg" className={`custom-navbar ${scrolled ? "scrolled" : ""}`}>
      <Container className="d-flex justify-content-between align-items-center">
        {/* Logo */}
        <Link to="/" className="navbar-logo text-decoration-none">
          <img src ="/logo.png" alt="Bookstore Logo" className="logo-image" />
          <span className="logo-text">5K Bookstore</span>
        </Link>

        {/* Navigation links */}
        <Nav className="mx-auto">
          <Link to="#most-read" className="nav-link">Most Reads</Link>
          <Link to="#available" className="nav-link">Available</Link>
          <Link to="#newest" className="nav-link">Newest In</Link>
          <Link to="/profile" className="nav-link">
            Profile
          </Link>
        </Nav>

        {/* Search bar */}
        <Form className="d-flex search-form" onSubmit={handleSearch}>
          <input
            type="text"
            name="search"
            placeholder="Search books..."
            className="form-control search-input"
          />
        </Form>
      </Container>
    </BSNavbar>
  );
};

export default NavbarComponent;
