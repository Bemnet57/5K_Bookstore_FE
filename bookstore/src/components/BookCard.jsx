import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/BookCard.css";

const BookCard = ({ id, image, title, author }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/books/${id}`);
  };

  return (
    <div className="book-card" onClick={handleClick}>
      <div className="book-image">
        <img
          src={image || "/placeholder-book.jpg"} // placeholder if image missing
          alt={title}
        />
      </div>
      <div className="book-info">
        <h5 className="book-title">{title}</h5>
        <p className="book-author">{author}</p>
      </div>
    </div>
  );
};

export default BookCard;
