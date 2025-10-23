import React from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "../style/Auth.css";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle login here
  };

  return (
    <Container fluid className="auth-container">
      <Row className="auth-row">
        {/* Image side */}
        <Col md={6} className="auth-image-side">
          <div className="image-placeholder">Image here</div>
        </Col>

        {/* Form side */}
        <Col md={6} className="auth-form-side">
          <div className="auth-form-wrapper">
            <h2 className="auth-title">Welcome Back</h2>
            <p className="auth-subtitle">Login to your account</p>

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Username or Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username or email"
                  className="auth-input"
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  className="auth-input"
                />
              </Form.Group>

              <Button type="submit" className="btn-gold w-100 mb-3">
                Login
              </Button>

              <Button
                variant="outline-gold"
                className="w-100"
                onClick={() => navigate("/signup")}
              >
                Create an account
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
