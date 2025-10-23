import React, { useEffect, useState } from "react";
import AdminLayout from "./AdminLayout";
import { Card, Button } from "react-bootstrap";
import "../style/UserManager.css";

const UserManager = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);

  const handleEdit = (id) => alert(`Edit user ${id}`);
  const handleBlock = (id) => alert(`Block/unblock user ${id}`);

  return (
    <AdminLayout>
      <h2 className="admin-page-title">User Manager</h2>
      <div className="user-grid">
        {users.length ? (
          users.map((user) => (
            <Card key={user.id} className="admin-card">
              <h5>{user.name}</h5>
              <p>Email: {user.email}</p>
              <div className="user-actions">
                <Button className="btn-gold" onClick={() => handleEdit(user.id)}>
                  Edit
                </Button>
                <Button
                  className="btn-outline"
                  onClick={() => handleBlock(user.id)}
                >
                  Block/Unblock
                </Button>
              </div>
            </Card>
          ))
        ) : (
          <p>No users found.</p>
        )}
      </div>
    </AdminLayout>
  );
};

export default UserManager;
