import React, { useState } from "react";
import AdminLayout from "./AdminLayout";
import { Form, Button, Card } from "react-bootstrap";

const BookManager = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    cover: null,
    keywords: "",
    summary: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Book submitted!");
  };

  return (
    <AdminLayout>
      <h2 className="admin-page-title">Add / Edit Book</h2>
      <Card className="admin-card">
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Book title"
                className="admin-input"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Author Name</Form.Label>
              <Form.Control
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                placeholder="Author name"
                className="admin-input"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Cover Image</Form.Label>
              <Form.Control
                type="file"
                name="cover"
                onChange={handleChange}
                className="admin-input"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Keywords</Form.Label>
              <Form.Control
                type="text"
                name="keywords"
                value={formData.keywords}
                onChange={handleChange}
                placeholder="Comma-separated keywords"
                className="admin-input"
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Summary</Form.Label>
              <Form.Control
                as="textarea"
                name="summary"
                value={formData.summary}
                onChange={handleChange}
                rows={4}
                className="admin-input"
              />
            </Form.Group>

            <Button type="submit" className="btn-gold w-100">
              Save Book
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </AdminLayout>
  );
};

export default BookManager;
