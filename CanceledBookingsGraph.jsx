import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, Title } from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, Title);

const CanceledBookingsGraph = () => {
  // Sample Data for Canceled Bookings
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Canceled Bookings",
        data: [10, 15, 8, 12, 20, 25, 18, 30, 22, 28, 26, 35], // Sample cancellation data
        borderColor: "#e63946", // Red color for cancellations
        backgroundColor: "rgba(230, 57, 70, 0.2)", // Light red fill
        tension: 0.4, // Smooth curve effect
        fill: true,
      },
    ],
  };

  // Chart Options
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Monthly Canceled Bookings",
        font: {
          size: 18,
        },
      },
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div className="chart-container">
      <h3>Canceled Bookings Trend</h3>
      <Line data={data} options={options} />
    </div>
  );
};

export default CanceledBookingsGraph;