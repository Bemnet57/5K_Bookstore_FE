import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/BookDetail.css";

const BookDetails = () => {
  const navigate = useNavigate();
  const handleDelivery = () => navigate("/delivery?bookId=123");

  return (
    <div className="book-details">
      <div className="book-cover"></div>
      <div className="book-info">
        <h2>The Great Book</h2>
        <p>By Author Name</p>
        <p className="summary">
          A detailed summary of the book will go here. Simple, elegant layout.
        </p>
        <button onClick={handleDelivery} className="gold-btn">
          Get Delivery
        </button>
      </div>
    </div>
  );
};

export default BookDetails;
