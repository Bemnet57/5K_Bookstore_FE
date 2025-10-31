import React from "react";
import "../style/Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="custom-footer mt-5">
      <Container>
        <Row className="gy-3 text-center text-md-start">
          {/* Brand Section */}
          <Col md={4}>
            <h4 className="footer-logo">📚 BookStore</h4>
            <p className="footer-desc">
              Discover, explore, and grow your collection — one story at a time.
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={4}>
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="footer-links list-unstyled">
              <li>
                <Link to="/books">Books</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </Col>

          {/* Contact Section */}
          <Col md={4}>
            <h5 className="footer-heading">Stay Connected</h5>
            <p className="footer-text">info@bookstore.com</p>
            <p className="footer-text">Addis Ababa, Ethiopia</p>
          </Col>
        </Row>

        {/* Bottom Bar */}
        <Row>
          <Col className="text-center mt-4">
            <p className="footer-copy">
              © {new Date().getFullYear()} BookStore. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
