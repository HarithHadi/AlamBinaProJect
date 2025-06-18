'use client';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import type { ChartOptions } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ['Staff Performance', 'Cleanliness', 'Crowd Control'],
  datasets: [
    {
      label: 'Rating',
      data: [4, 5, 3],
      backgroundColor: '#e8bf09',
    },
  ],
};

const options:ChartOptions<'bar'> = {
  indexAxis: 'y' as const,
  responsive: true,
  animation: {
    duration: 1000,
  },
  plugins: {
    title: {
      display: true,
      text: 'Top Rating for KLCC Petronas Towers',
      font: {
        size: 15,
        weight: 'bold',
      },
      color: '#505050',
      padding: 0,
      align: 'center',
    },
    legend: {
      position: 'top' as const,
    },
  },
};

export default function HorizontalBarChart({ shouldRender }: { shouldRender: boolean }) {
  return shouldRender ? <Bar data={data} options={options} /> : null;
}
