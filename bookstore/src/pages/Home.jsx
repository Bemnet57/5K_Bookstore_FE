import React from "react";
import BookCard from "../components/BookCard";
import DeliverySection from "./DeliveryPage"; // move this to components
import "../style/Home.css";
import "../style/Section.css";

const Home = () => {
  return (
    <div className="home-container bg-[#FFFCF8]">
      {/* Most Read Section */}
      <section id="most-read" className="py-8">
        <h3 className="section-title">Most Read</h3>
        <div className="grid grid-cols-3 gap-4">
          {/* Map through mostReadBooks */}
          <BookCard />
        </div>
      </section>

      {/* Available Books Section */}
      <section id="available" className="py-8">
        <h3 className="section-title">Available Books</h3>
        <div className="grid grid-cols-3 gap-4">
          {/* Map through availableBooks */}
        </div>
      </section>

      {/* Newest In Section */}
      <section id="newest" className="py-8">
        <h3 className="section-title">Newest In</h3>
        <div className="grid grid-cols-3 gap-4">
          {/* Map through newestBooks */}
        </div>
      </section>

      {/* Delivery Section */}
      <section id="delivery" className="py-8">
        <DeliverySection />
      </section>
    </div>
  );
};

export default Home;
