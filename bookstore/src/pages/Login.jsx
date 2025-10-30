import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import "../style/Auth.css";

const Login = () => {
  const { login } = useAuth();
  const [form, setForm] = useState({ username: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username: form.username, role: "user" });
  };

  return (
    <div className="auth-container">
      <div className="auth-image"></div>
      <div className="auth-form">
        <h2>Welcome Back!</h2>
        <p>Login to your account</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username or Email"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
          <button type="submit" className="gold-btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
