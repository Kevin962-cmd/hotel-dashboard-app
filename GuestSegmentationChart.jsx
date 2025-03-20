import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import NavBar from "./navbar";
import "../styles/GuestSegmentationChart.css";

// Register necessary components for Chart.js
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const GuestSegmentationChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],  // Months
    datasets: [
      {
        label: 'General Guests',
        data: [300, 320, 350, 370, 400, 450, 500],  // General guest data
        borderColor: '#FF5733',  // Red color for General Guests
        backgroundColor: 'rgba(255, 87, 51, 0.2)',  // Light Red background
        tension: 0.4,
        fill: true,
      },
      {
        label: 'Member Guests',
        data: [150, 180, 200, 250, 300, 320, 350],  // Member guest data
        borderColor: '#2a9d8f',  // Green color for Member Guests
        backgroundColor: 'rgba(42, 157, 143, 0.2)',  // Light Green background
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Guest Segmentation (General vs Member) - Monthly',
        font: {
          size: 18,
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw} guests`;  // Show guest number
          },
        },
      },
      legend: {
        position: 'top',
      },
    },
  };

  return (
    <div className="page-container">
      <NavBar />  {/* ✅ Use Navbar here so it's not faint */}
      <div className="chart-container">
        <h2 className="chart-title">Guest Segmentation Chart</h2>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default GuestSegmentationChart;