import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { useNavigate } from 'react-router-dom';
import data from '../data';
import { Chart, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import styles from './Dashboard.module.css';

// Register Chart.js components
Chart.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

function Dashboard() {
  const navigate = useNavigate();

  const lineData = {
    labels: data.dailyAnalytics.map(day => day.day),
    datasets: [
      {
        label: 'Revenue',
        data: data.dailyAnalytics.map(day => day.revenue),
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)'
      }
    ]
  };

  const barData = {
    labels: data.dailyAnalytics.map(day => day.day),
    datasets: [
      {
        label: 'Orders',
        data: data.dailyAnalytics.map(day => day.orders),
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1
      }
    ]
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Dashboard</h2>
      <div className={styles.summary}>
        <div>Total Revenue: ${data.summary.totalRevenue}</div>
        <div>Total Orders: {data.summary.numberOfOrders}</div>
        <div>Average Order Value: ${data.summary.averageOrderValue.toFixed(2)}</div>
      </div>
      <div className={styles.charts}>
        <div className={styles.chart}>
          <Line data={lineData} />
        </div>
        <div className={styles.chart}>
          <Bar data={barData} />
        </div>
      </div>
      <button className={styles.button} onClick={() => navigate('/item-analytics')}>
        Go to Item Analytics
      </button>
    </div>
  );
}

export default Dashboard;




















// import {Bar, Line} from 'react-chartjs-2';
// import {useNavigate} from 'react-router-dom';
// import data from '../data';
// import { Chart, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// // Register Chart.js components
// Chart.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

// function Dashboard() {
//     const navigate = useNavigate();

//     const lineData = {
//         labels: data.dailyAnalytics.map(day => day.day),
//         datasets: [
//             {
//                 label: 'Revenue',
//                 data: data.dailyAnalytics.map(day => day.revenue),
//                 fill: false,
//                 backgroundColor: 'rgb(75, 192, 192)',
//                 borderColor: 'rgba(75, 192, 192, 0.2)'
//             }
//         ]
//     };
    

//     const barData = {
//         labels: data.dailyAnalytics.map(day => day.day),
//         datasets: [
//             {
//                 label: 'Orders',
//                 data: data.dailyAnalytics.map(day => day.orders),
//                 backgroundColor: 'rgba(153, 102, 255, 0.2)',
//                 borderColor: 'rgba(153, 102, 255, 1)',
//                 borderWidth: 1
//             }
//         ]
//     }

//     return (
//         <div>
//             <h2>Dashboard</h2>
//             <div>
//                 <div>Total Revenue: ${data.summary.totalRevenue}</div>
//                 <div>Total Orders: {data.summary.numberOfOrders}</div>
//                 <div>Average Order Value: {data.summary.averageOrderValue}</div>
//             </div>
//             <div>
//                 <Line data={lineData}/>
//                 <Bar data={barData}/>
//             </div>
//             <button onClick={()=> navigate('/item-analytics')}>Go to Item Analytics</button>
//         </div>
//     )
// }

// export default Dashboard;