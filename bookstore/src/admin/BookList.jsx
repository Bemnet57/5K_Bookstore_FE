import React, { useEffect, useState } from "react";
import AdminLayout from "./AdminLayout";
import { Card, Button } from "react-bootstrap";
import "../style/BookList.css";

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch books from API
    fetch("/api/books")
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error(err));
  }, []);

  const handleEdit = (id) => {
    alert(`Edit book ${id}`);
  };

  const handleDelete = (id) => {
    alert(`Delete book ${id}`);
  };

  return (
    <AdminLayout>
      <h2 className="admin-page-title">Book List</h2>
      <div className="booklist-grid">
        {books.length ? (
          books.map((book) => (
            <Card key={book.id} className="admin-card">
              <div className="book-cover-placeholder">
                {/* Could replace with: <img src={book.cover} /> */}
              </div>
              <Card.Body>
                <h5 className="book-title">{book.title}</h5>
                <p className="book-author">{book.author}</p>
                <div className="book-actions">
                  <Button className="btn-gold" onClick={() => handleEdit(book.id)}>
                    Edit
                  </Button>
                  <Button
                    className="btn-outline"
                    onClick={() => handleDelete(book.id)}
                  >
                    Delete
                  </Button>
                </div>
              </Card.Body>
            </Card>
          ))
        ) : (
          <p>No books found.</p>
        )}
      </div>
    </AdminLayout>
  );
};

export default BookList;
