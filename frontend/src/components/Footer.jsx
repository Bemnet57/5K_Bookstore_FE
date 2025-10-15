import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-light text-center text-muted py-4 mt-5 border-top">
      <div className="container">
        <h5 className="fw-bold text-primary mb-3">📚 BookStore</h5>
        <ul className="list-inline mb-3">
          <li className="list-inline-item mx-2">
            <Link className="text-decoration-none text-muted" to="/about">
              About
            </Link>
          </li>
          <li className="list-inline-item mx-2">
            <Link className="text-decoration-none text-muted" to="/contact">
              Contact
            </Link>
          </li>
          <li className="list-inline-item mx-2">
            <Link className="text-decoration-none text-muted" to="/books">
              Books
            </Link>
          </li>
        </ul>
        <p className="mb-0 small">
          © {new Date().getFullYear()} BookStore. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
