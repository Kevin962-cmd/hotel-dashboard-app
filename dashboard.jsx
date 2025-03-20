import React from "react";
import NavBar from "./navbar";
import "../styles/navbar.css"; 
import "../styles/dashboard.css";
import BookingArrivalsGraph from "./BookingArrivalsGraph";
import CanceledBookingsGraph from "./CanceledBookingsGraph";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <NavBar /> {/* ✅ Navbar Added */}

      {/* ✅ Cards Section - Ensure Content is Visible */}
      <div className="stats-cards">
        <div className="card">
          <h3>Booking Arrivals (January 2024)</h3>
          <p><strong>This Month:</strong> <span style={{ color: "black" }}>40</span></p>
          <p><strong>This Year:</strong> <span style={{ color: "black" }}>500</span></p>
        </div>
        <div className="card">
          <h3>Today's Bookings</h3>
          <p><strong>Arrivals:</strong> <span style={{ color: "black" }}>35</span></p>
          <p><strong>Departures:</strong> <span style={{ color: "black" }}>18</span></p>
        </div>
        <div className="card">
          <h3>Canceled Bookings</h3>
          <p><strong>Canceled This Month:</strong> <span style={{ color: "black" }}>30</span></p>
        </div>
        <div className="card">
          <h3>Most Booked Units</h3>
          <p><strong>Total Bookings:</strong> <span style={{ color: "black" }}>58</span></p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="charts">
        <div className="chart">
          <h3>Booking Arrivals</h3>
          <BookingArrivalsGraph />
        </div>
        <div className="chart">
          <h3>Canceled Bookings</h3>
          <CanceledBookingsGraph />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;