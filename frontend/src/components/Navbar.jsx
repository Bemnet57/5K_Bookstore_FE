import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand fw-bold text-primary" to="/">
          📚 BookStore
        </Link>

        {/* Toggle button for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setExpanded(!expanded)}
          aria-controls="navbarNav"
          aria-expanded={expanded}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div
          className={`collapse navbar-collapse ${expanded ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" onClick={() => setExpanded(false)}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/books" onClick={() => setExpanded(false)}>
                Books
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about" onClick={() => setExpanded(false)}>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" onClick={() => setExpanded(false)}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
