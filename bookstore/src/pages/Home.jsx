import React from "react";
import "../style/Home.css";
import Section from "../components/Section";
import BookCard from "../components/BookCard";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  // temporary — will be filled from backend later
  const mostRead = [];
  const availableBooks = [];
  const newestIn = [];

  const renderBooks = (books) => {
    if (books.length === 0) {
      return (
        <p className="no-books-text text-center">No books for now.</p>
      );
    }

    return (
      <Row className="g-4">
        {books.map((book) => (
          <Col key={book.id} xs={12} sm={6} md={3}>
            <BookCard title={book.title} author={book.author} />
          </Col>
        ))}
      </Row>
    );
  };

  return (
    <div className="home-page">
      <Container className="py-5">
        <Section title="Most Read" link="/books/most-read">
          {renderBooks(mostRead)}
        </Section>

        <Section title="Available Books" link="/books/available">
          {renderBooks(availableBooks)}
        </Section>

        <Section title="Newest In" link="/books/newest">
          {renderBooks(newestIn)}
        </Section>
      </Container>
    </div>
  );
};

export default Home;
