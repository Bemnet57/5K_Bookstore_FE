import React, { useEffect, useState } from "react";
import AdminLayout from "./AdminLayout";
import { Card, Button } from "react-bootstrap";
import "../style/BookRequest.css";

const BookRequestQueue = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetch("/api/book-requests")
      .then((res) => res.json())
      .then((data) => setRequests(data))
      .catch((err) => console.error(err));
  }, []);

  const handleApprove = (id) => alert(`Approved request ${id}`);
  const handleReject = (id) => alert(`Rejected request ${id}`);

  return (
    <AdminLayout>
      <h2 className="admin-page-title">Book Requests Queue</h2>
      <div className="request-grid">
        {requests.length ? (
          requests.map((req) => (
            <Card key={req.id} className="admin-card">
              <h5>{req.bookTitle}</h5>
              <p>Requested by: {req.userName}</p>
              <div className="request-actions">
                <Button className="btn-gold" onClick={() => handleApprove(req.id)}>
                  Approve
                </Button>
                <Button
                  className="btn-outline"
                  onClick={() => handleReject(req.id)}
                >
                  Reject
                </Button>
              </div>
            </Card>
          ))
        ) : (
          <p>No pending requests.</p>
        )}
      </div>
    </AdminLayout>
  );
};

export default BookRequestQueue;
