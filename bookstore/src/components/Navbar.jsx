import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/Navbar.css";
import { Navbar as BSNavbar, Nav, Container, Form } from "react-bootstrap";

const NavbarComponent = () => {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.search.value.trim();
    if (query) navigate(`/books?search=${query}`);
  };

  return (
    <BSNavbar expand="lg" className="custom-navbar">
      <Container className="d-flex justify-content-between align-items-center">
        {/* Logo */}
        <Link to="/" className="navbar-logo text-decoration-none">
          <h4 className="m-0">📚 BookStore</h4>
        </Link>

        {/* Navigation links */}
        <Nav className="mx-auto">
          <Link to="/books?filter=most-reads" className="nav-link">
            Most Reads
          </Link>
          <Link to="/books?filter=available" className="nav-link">
            Available
          </Link>
          <Link to="/books?filter=newest" className="nav-link">
            Newest In
          </Link>
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
