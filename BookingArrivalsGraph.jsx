import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement);

const BookingArrivalsGraph = () => {
  const data = {
    labels: ['Mar 1', 'Mar 2', 'Mar 3', 'Mar 4', 'Mar 5', 'Mar 6', 'Mar 7', 'Mar 8'],
    datasets: [
      {
        label: 'Booking Arrivals',
        data: [5, 3, 8, 2, 9, 5, 3, 7],
        backgroundColor: '#2a9d8f',  // Bar color
        borderColor: '#1d3557',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw} bookings`;
          },
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <h3>Booking Arrivals (March 2025)</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BookingArrivalsGraph;