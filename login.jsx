import React, { useState } from "react";
import "../styles/login.css";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Regular expression to check if the email is a valid Gmail address
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    // Basic password validation (at least 6 characters)
    if (!emailRegex.test(email)) {
      setError("Please enter a valid Gmail address.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    // Simulate a successful login
    if (email === "smith@gmail.com" && password === "password123") {
      setError(""); // Clear any previous error
      onLogin(); // Trigger the login function passed from App.jsx
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <img src="/wmremove-transformed.png" alt="Hotel Logo" className="login-logo" />

        <h2>WELCOME</h2>
       
        
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={error && !email ? "error-input" : ""}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={error && !password ? "error-input" : ""}
          />

          <div className="options">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
            <a href="#"> Forgot password?</a>
          </div>

          {error && <p className="error-message">{error}</p>}

          <button type="submit">Sign in</button>
        </form>
      </div>
    </div>
  );
};

export default Login;