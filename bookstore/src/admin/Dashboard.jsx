import React, { useEffect, useState } from "react";
import AdminLayout from "./AdminLayout";
import "../style/Dashboard.css";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalBooks: 0,
    pendingRequests: 0,
    totalUsers: 0,
    activeUsers: 0,
    recentBooks: [],
  });

  useEffect(() => {
    // Fetch all stats from API
    fetch("/api/admin-dashboard")
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <AdminLayout>
      <h2 className="admin-page-title">Dashboard</h2>
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>Total Books</h3>
          <p>{stats.totalBooks}</p>
        </div>

        <div className="dashboard-card">
          <h3>Pending Requests</h3>
          <p>{stats.pendingRequests}</p>
        </div>

        <div className="dashboard-card">
          <h3>Total Users</h3>
          <p>{stats.totalUsers}</p>
        </div>

        <div className="dashboard-card">
          <h3>Active Users</h3>
          <p>{stats.activeUsers}</p>
        </div>

        <div className="dashboard-card dashboard-recent-books">
          <h3>Recently Added Books</h3>
          {stats.recentBooks.length ? (
            <ul>
              {stats.recentBooks.map((book) => (
                <li key={book.id}>{book.title}</li>
              ))}
            </ul>
          ) : (
            <p>No recent books</p>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
