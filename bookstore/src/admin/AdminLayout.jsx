// src/admin/AdminLayout.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../style/Admin.css";

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-container">
      <aside className="admin-sidebar">
        <h3 className="admin-logo">5K Bookstore Admin</h3>
        <nav>
          <Link to="/admin/dashboard" className="admin-link">Dashboard</Link>
          <Link to="/admin/book-list" className="admin-link">Book List</Link>
          <Link to="/admin/book-requests" className="admin-link">Book Requests</Link>
          <Link to="/admin/user-manager" className="admin-link">User Manager</Link>
          <Link to="/admin/book-manager" className="admin-link">Book Manager</Link>
        </nav>
      </aside>
      <main className="admin-content">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
