import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler
);

export default function BookingTrendsChart({ dataLabels, dataValues }) {
  const data = {
    labels: dataLabels,
    datasets: [
      {
        label: 'Bookings',
        data: dataValues,
        borderColor: 'rgb(239, 68, 68)', // Tailwind rose-500
        backgroundColor: 'rgba(239, 68, 68, 0.1)', // subtle fill if desired
        tension: 0.4,
        pointRadius: 0,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context) => `${context.parsed.y} Bookings`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { display: true, color: '#eee' },
        ticks: { color: '#333' },
      },
      x: {
        grid: { display: false },
        ticks: { color: '#333' },
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200 h-64">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-base font-semibold text-gray-800">Booking Trends</h2>
        <button className="bg-rose-100 text-rose-600 text-sm px-3 py-1 rounded">
          Last 7 Days
        </button>
      </div>
      <Line data={data} options={options} />
    </div>
  );
}
