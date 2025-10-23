import React, { useState } from "react";
import { Container, Row, Col, Button, Form, Card } from "react-bootstrap";
import BookCard from "../components/BookCard";
import "../style/Delivery.css";

const Delivery = () => {
  const [selectedOption, setSelectedOption] = useState("pickup");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    campus: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order confirmed via ${selectedOption}!`);
  };

  return (
    <Container fluid className="delivery-container">
      <Row className="justify-content-center align-items-start delivery-row">
        {/* Book card */}
        <Col md={5} className="book-section">
          <BookCard title="Atomic Habits" author="James Clear" />
        </Col>

        {/* Delivery form */}
        <Col md={5} className="delivery-section">
          <div className="delivery-toggle mb-4">
            <Button
              className={`delivery-btn ${
                selectedOption === "pickup" ? "active" : ""
              }`}
              onClick={() => setSelectedOption("pickup")}
            >
              I’ll Come Take It
            </Button>
            <Button
              className={`delivery-btn ${
                selectedOption === "delivery" ? "active" : ""
              }`}
              onClick={() => setSelectedOption("delivery")}
            >
              Deliver to Me
            </Button>
          </div>

          <Card className="delivery-card">
            <Card.Body>
              {selectedOption === "pickup" && (
                <>
                  <h5 className="delivery-title">Pickup Details</h5>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="delivery-input"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter phone number"
                        className="delivery-input"
                      />
                    </Form.Group>
                    <Form.Group className="mb-4">
                      <Form.Label>Campus</Form.Label>
                      <Form.Select
                        name="campus"
                        value={formData.campus}
                        onChange={handleChange}
                        className="delivery-input"
                      >
                        <option value="">Select campus</option>
                        <option value="main">Main Campus</option>
                        <option value="science">Science Campus</option>
                        <option value="technology">Technology Campus</option>
                      </Form.Select>
                    </Form.Group>
                    <Button type="submit" className="btn-gold w-100">
                      Confirm Pickup
                    </Button>
                  </Form>
                </>
              )}

              {selectedOption === "delivery" && (
                <>
                  <h5 className="delivery-title">Delivery Details</h5>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="delivery-input"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter phone number"
                        className="delivery-input"
                      />
                    </Form.Group>
                    <Form.Group className="mb-4">
                      <Form.Label>Campus</Form.Label>
                      <Form.Select
                        name="campus"
                        value={formData.campus}
                        onChange={handleChange}
                        className="delivery-input"
                      >
                        <option value="">Select campus</option>
                        <option value="main">Main Campus</option>
                        <option value="science">Science Campus</option>
                        <option value="technology">Technology Campus</option>
                      </Form.Select>
                    </Form.Group>
                    <Button type="submit" className="btn-gold w-100">
                      Confirm Delivery
                    </Button>
                  </Form>
                </>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Delivery;
