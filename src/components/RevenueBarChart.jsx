import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import TimeFilterDropdown from './TimeFilterDropdown';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);


export default function RevenueBarChart({ dataLabels, dataValues }) {
  const data = {
    labels: dataLabels,
    datasets: [
      {
        label: 'Revenue',
        data: dataValues,
        backgroundColor: 'orange',
        borderRadius: 1,
        barThickness: 10, // Similar width to image bars
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
          label: (context) => `$${context.parsed.y}`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        min: 1000,
        grid: { display: false },
        ticks: {
          color: '#333',
          stepSize: 1000,
        },
      },
      x: {
        grid: { display: false },
        ticks: {
          color: '#333',
        },
      },
    },
  };

  const [selected, setSelected] = useState('This Month');
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-base font-semibold text-gray-800">Revenue Analytics</h2>
        <TimeFilterDropdown selected={selected} onChange={setSelected} />
       
      </div>
      <div className="h-64"> {/* Adjust height */}
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
