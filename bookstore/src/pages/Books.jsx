import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BookCard from "../components/BookCard";
import "../style/Books.css";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const filter = queryParams.get("filter");
  const search = queryParams.get("search");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);

        let url = "http://localhost:8000/api/books/";
        if (filter) {
          url += `?filter=${filter}`;
        } else if (search) {
          url += `?search=${search}`;
        }

        const response = await fetch(url);
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [filter, search]);

  return (
    <div className="books-page">
      <div className="books-container">
        {loading ? (
          <p className="no-books-text">Loading books...</p>
        ) : books.length === 0 ? (
          <p className="no-books-text">No books found for now.</p>
        ) : (
          <div className="books-grid">
            {books.map((book) => (
              <BookCard
                key={book.id}
                title={book.title}
                author={book.author}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Books;
