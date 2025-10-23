import React from "react";
import BookCard from "../components/BookCard";
import DeliverySection from "../pages/DeliveryPage";
import "../style/Home.css";
import "../style/Section.css";

const Home = () => {
  return (
    <div className="home-container bg-[#FFFCF8]">
      <section id="most-read" className="py-8">
        <h3 className="section-title">Most Read</h3>
        <div className="grid grid-cols-3 gap-4">
          {/* map through mostReadBooks */}
          <BookCard />
        </div>
      </section>

      <section id="available" className="py-8">
        <h3 className="section-title">Available Books</h3>
        <div className="grid grid-cols-3 gap-4">
          {/* map through availableBooks */}
        </div>
      </section>

      <section id="newest" className="py-8">
        <h3 className="section-title">Newest In</h3>
        <div className="grid grid-cols-3 gap-4">
          {/* map through newestBooks */}
        </div>
      </section>

      <section id="delivery" className="py-8">
        <DeliverySection />
      </section>
    </div>
  );
};

export default Home;
