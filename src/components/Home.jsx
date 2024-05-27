import React from 'react';
import { useNavigate } from "react-router-dom";
import styles from './Home.module.css';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Advanced React Analytics Dashboard for QuickEats</h1>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Project Overview</h2>
        <p>
          The <strong>QuickEats</strong> analytics dashboard is a comprehensive, advanced React application designed to provide in-depth insights into the restaurant chain's performance. It includes a secure authentication system, protected routes, dynamic visualizations, and interactive data analysis features.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Features</h2>
        <h3 className={styles.subTitle}>Authentication</h3>
        <ul className={styles.list}>
          <li><strong>User Login:</strong> Secure login with dummy credentials (username: <span className={styles.code}>admin</span>, password: <span className={styles.code}>admin</span>).</li>
          <li><strong>Protected Routes:</strong> Ensures only authenticated users can access the dashboard and analytics pages.</li>
        </ul>

        <h3 className={styles.subTitle}>Dashboard</h3>
        <button className={styles.button} onClick={() => navigate('/dashboard')}>Go to Dashboard</button>
        <ul className={styles.list}>
          <li><strong>Summary Metrics:</strong>
            <ul className={styles.list}>
              <li>Total Revenue</li>
              <li>Number of Orders</li>
              <li>Average Order Value</li>
            </ul>
          </li>
          <li><strong>Interactive Graphs:</strong>
            <ul className={styles.list}>
              <li>Revenue over the past week (Line Chart)</li>
              <li>Orders over the past week (Bar Chart)</li>
              <li>Peak Order Times and Customer Satisfaction Ratings</li>
            </ul>
          </li>
        </ul>

        <h3 className={styles.subTitle}>Item Analytics</h3>
        <button className={styles.button} onClick={() => navigate('/item-analytics')}>Go to Item Analytics</button>
        <ul className={styles.list}>
          <li><strong>Item List:</strong>
            <ul className={styles.list}>
              <li>Displays all menu items</li>
              <li>Filter by dietary preference (veg/non-veg)</li>
              <li>Sort by revenue or name</li>
            </ul>
          </li>
        </ul>

        <h3 className={styles.subTitle}>State Management</h3>
        <p>Utilizes React's Context API for managing user authentication and dashboard data.</p>

        <h3 className={styles.subTitle}>Visualization</h3>
        <p>Integrates Chart.js for dynamic and interactive visualizations.</p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Technologies Used</h2>
        <ul className={styles.list}>
          <li><strong>React</strong> for building the user interface.</li>
          <li><strong>React Router</strong> for handling routing.</li>
          <li><strong>Context API</strong> for state management.</li>
          <li><strong>Chart.js</strong> for creating charts and graphs.</li>
          <li><strong>CSS</strong> for styling the application.</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;


























// import { useNavigate } from "react-router-dom";
// const Home = () => {
//     const navigate = useNavigate();
//   return (
//     <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px' }}>
//       <h1>Advanced React Analytics Dashboard for QuickEats</h1>
//       <section>
//         <h2>Project Overview</h2>
//         <p>
//           The <strong>QuickEats</strong> analytics dashboard is a comprehensive, advanced React application designed to provide in-depth insights into the restaurant chain's performance. It includes a secure authentication system, protected routes, dynamic visualizations, and interactive data analysis features.
//         </p>
//       </section>

//       <section>
//         <h2>Features</h2>
//         <h3>Authentication</h3>
//         <ul>
//           <li><strong>User Login:</strong> Secure login with dummy credentials (username: <code>admin</code>, password: <code>admin</code>).</li>
//           <li><strong>Protected Routes:</strong> Ensures only authenticated users can access the dashboard and analytics pages.</li>
//         </ul>

//         <h3>Dashboard</h3>
//         <button onClick={()=> navigate('/dashboard')}>Go to Dashboard</button>
//         <ul>
//           <li><strong>Summary Metrics:</strong>
//             <ul>
//               <li>Total Revenue</li>
//               <li>Number of Orders</li>
//               <li>Average Order Value</li>
//             </ul>
//           </li>
//           <li><strong>Interactive Graphs:</strong>
//             <ul>
//               <li>Revenue over the past week (Line Chart)</li>
//               <li>Orders over the past week (Bar Chart)</li>
//               <li>Peak Order Times and Customer Satisfaction Ratings</li>
//             </ul>
//           </li>
//         </ul>

//         <h3>Item Analytics</h3>
//         <button onClick={()=> navigate('/item-analytics')}>Go to Item Analytics</button>
//         <ul>
//           <li><strong>Item List:</strong>
//             <ul>
//               <li>Displays all menu items</li>
//               <li>Filter by dietary preference (veg/non-veg)</li>
//               <li>Sort by revenue or name</li>
//             </ul>
//           </li>
//         </ul>

//         <h3>State Management</h3>
//         <p>Utilizes React's Context API for managing user authentication and dashboard data.</p>

//         <h3>Visualization</h3>
//         <p>Integrates Chart.js for dynamic and interactive visualizations.</p>
//       </section>

//       <section>
//         <h2>Technologies Used</h2>
//         <ul>
//           <li><strong>React</strong> for building the user interface.</li>
//           <li><strong>React Router</strong> for handling routing.</li>
//           <li><strong>Context API</strong> for state management.</li>
//           <li><strong>Chart.js</strong> for creating charts and graphs.</li>
//           <li><strong>CSS</strong> for styling the application.</li>
//         </ul>
//       </section>
//     </div>
//   );
// };

// export default Home;


