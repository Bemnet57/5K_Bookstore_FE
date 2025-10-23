import React from "react";
import "../style/BookCard.css";
import { useNavigate } from "react-router-dom";

const BookCard = ({ title, author }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/book/${title.toLowerCase().replace(/\s+/g, "-")}`);
  };

  return (
    <div className="book-card" onClick={handleClick}>
      <div className="book-image-placeholder"></div>
      <div className="book-info">
        <h5 className="book-title">{title}</h5>
        <p className="book-author">{author}</p>
      </div>
    </div>
  );
};

export default BookCard;
