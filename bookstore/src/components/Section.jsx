import React from "react";
import { useNavigate } from "react-router-dom";
import BookCard from "./BookCard";
import "../style/Section.css";

const Section = ({ title, books = [], link }) => {
  const navigate = useNavigate();

  const handleTitleClick = () => {
    if (link) navigate(link);
  };

  return (
    <div className="section-container">
      <div className="section-header">
        <h3 className="section-title" onClick={handleTitleClick}>
          {title}
        </h3>
      </div>

      <div className="section-books row">
        {books.length > 0 ? (
          books.map((book) => (
            <div key={book.id} className="col-md-3 col-sm-6 mb-4">
              <BookCard
                id={book.id}
                image={book.image}
                title={book.title}
                author={book.author}
              />
            </div>
          ))
        ) : (
          <p className="text-muted text-center">No books found</p>
        )}
      </div>
    </div>
  );
};

export default Section;
