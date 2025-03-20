import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css";

const NavBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        {/* ✅ Replace "MyHotel" with Image from Public Folder */}
        <img src="/wmremove-transformed.png" alt="Hotel Logo" className="hotel-logo" />

        <input type="text" className="search-bar" placeholder="🔍 Search..." />
      </div>

      <div className="nav-links">
        <Link to="/dashboard">Booking Details</Link>
        <Link to="/guestbyage">Guest by Age Group</Link>
        <Link to="/guestsegmentation">Guests Segmentation</Link>
        <div className="user">
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;