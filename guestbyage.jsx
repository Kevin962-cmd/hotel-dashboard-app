import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import "../styles/GuestByAge.css";  
import NavBar from "./navbar";  

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend);

const GuestByAgeChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setChartData({
        labels: ['Age Group', 'Remaining'],
        datasets: [
          {
            label: 'Guests by Age',
            borderWidth: 1,
          },
        ],
      });
    }, 500);
  }, []);

  const options = {
    responsive: true,
    animation: {
      duration: 2000,
      easing: 'easeOutBounce',
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}%`;
          },
        },
      },
      legend: { display: false },
    },
  };

  return (
    <div className="page-container-guestbyage">
      <NavBar />
      <div className="chart-container-guestbyage">
        <h2 className="chart-title-guestbyage">Age Group Segmentation (February 2025)</h2>
        <p className="chart-subtitle-guestbyage">Comparison of guest distribution by age</p>
        
        {/* 2x2 Grid Layout */}
        <div className="chart-grid">
          <div className="chart-box">
            <h3>Children (0-12)</h3>
            {chartData ? (
              <Doughnut
                data={{
                  ...chartData,
                  datasets: [
                    { ...chartData.datasets[0], data: [40, 100 - 40], backgroundColor: ['#ff6b6b', '#ffe0e0'] },
                  ],
                }}
                options={options}
              />
            ) : (
              <p>Loading...</p>
            )}
          </div>
          <div className="chart-box">
            <h3>Adults (13-30)</h3>
            {chartData ? (
              <Doughnut
                data={{
                  ...chartData,
                  datasets: [
                    { ...chartData.datasets[0], data: [78, 100 - 78], backgroundColor: ['#1b9aaa', '#d1f4ff'] },
                  ],
                }}
                options={options}
              />
            ) : (
              <p>Loading...</p>
            )}
          </div>
          <div className="chart-box">
            <h3>Middle Age (31-55)</h3>
            {chartData ? (
              <Doughnut
                data={{
                  ...chartData,
                  datasets: [
                    { ...chartData.datasets[0], data: [80, 100 - 80], backgroundColor: ['#ffb703', '#ffecd1'] },
                  ],
                }}
                options={options}
              />
            ) : (
              <p>Loading...</p>
            )}
          </div>
          <div className="chart-box">
            <h3>Elder (56+)</h3>
            {chartData ? (
              <Doughnut
                data={{
                  ...chartData,
                  datasets: [
                    { ...chartData.datasets[0], data: [30, 100 - 30], backgroundColor: ['#8338ec', '#e0d1ff'] },
                  ],
                }}
                options={options}
              />
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestByAgeChart;