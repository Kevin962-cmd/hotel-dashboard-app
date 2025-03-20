import React, { useState } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import GuestByAgeChart from "./components/guestbyage";
import GuestSegmentationChart from "./components/GuestSegmentationChart";
import NavBar from "./components/navbar";  // Import NavBar
import "./styles/login.css";
import "./styles/dashboard.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();  // Get current route

  // Handle login logic
  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate("/dashboard");
  };

  return (
    <div>
      {/* ✅ Show Navbar only if NOT on login page */}
      {location.pathname !== "/" && <NavBar />} 

      <Routes>
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Login onLogin={handleLogin} />} />
        <Route path="/guestbyage" element={isLoggedIn ? <GuestByAgeChart /> : <Login onLogin={handleLogin} />} />
        <Route path="/guestsegmentation" element={isLoggedIn ? <GuestSegmentationChart /> : <Login onLogin={handleLogin} />} />
      </Routes>
    </div>
  );
}

export default App;