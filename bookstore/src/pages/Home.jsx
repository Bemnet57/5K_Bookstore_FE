import React from "react";
import BookCard from "../components/BookCard";
import "../style/Home.css";

const Home = () => {
  const sections = [
    { id: "most-read", title: "Most Read" },
    { id: "available", title: "Available Books" },
    { id: "newest", title: "Newest In" },
  ];

  return (
    <div className="home-container">
      {sections.map((section) => (
        <section id={section.id} key={section.id} className="home-section">
          <div className="section-header">
            <h3 className="section-title">{section.title}</h3>
          </div>
          <div className="book-grid">
            {[1, 2, 3].map((_, index) => (
              <BookCard key={index} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Home;
