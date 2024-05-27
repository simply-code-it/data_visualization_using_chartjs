import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import data from '../data';
import styles from './ItemAnalytics.module.css';

function ItemAnalytics() {
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('revenue');
  const navigate = useNavigate();

  const filteredItems = data.items
    .filter(item => (filter ? item.category === filter : true))
    .sort((a, b) => (sort === 'revenue' ? b.revenue - a.revenue : a.item.localeCompare(b.item)));

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Item Analytics</h2>
      <div className={styles.filters}>
        <label className={styles.label}>Filter by type: </label>
        <select className={styles.select} onChange={(e) => setFilter(e.target.value)} value={filter}>
          <option value="">All</option>
          <option value="veg">Veg</option>
          <option value="non-veg">Non-Veg</option>
        </select>

        <label className={styles.label}>Sort by: </label>
        <select className={styles.select} onChange={(e) => setSort(e.target.value)} value={sort}>
          <option value="revenue">Revenue</option>
          <option value="name">Name</option>
        </select>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Revenue</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map(item => (
            <tr key={item.item}>
              <td>{item.item}</td>
              <td>{item.category}</td>
              <td>{item.quantity}</td>
              <td>${item.revenue}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className={styles.button} onClick={() => navigate('/dashboard')}>Go to Dashboard</button>
    </div>
  );
}

export default ItemAnalytics;




















// import {useState} from 'react';
// import data from '../data';
// import { useNavigate } from 'react-router-dom';

// function ItemAnalytics() {
//     const [filter, setFilter] = useState('');
//     const [sort, setSort] = useState('revenue');
//     const navigate = useNavigate();

//     const filteredItems = data.items
//                             .filter(item => {
//                                 if(filter){
//                                     return item.category===filter;
//                                 }else{
//                                     return true;
//                                 }
//                                 // (filter? return item.category === filter : true )
//                             })
//                             .sort((a, b) => (sort === 'revenue' ? b.revenue-a.revenue: a.item.localeCompare(b.item)));

//     return (
//         <div>
//             <h2>Item Analytics</h2>
//             <div>
//                 <label>Filter by type: </label>
//                 <select onChange={(e)=> setFilter(e.target.value)} value={filter}>
//                     <option value="">All</option>
//                     <option value="veg">Veg</option>
//                     <option value="non-veg">Non-Veg</option>
//                 </select>

//                 <label>Sort by: </label>
//                 <select onChange={(e)=> setSort(e.target.value)} value={sort}>
//                     <option value="revenue">Revenue</option>
//                     <option value="name">Name</option>
//                 </select>
//             </div>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Category</th>
//                         <th>Quantity</th>
//                         <th>Revenue</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {filteredItems.map(item => (
//                         <tr key={item.item}>
//                             <td>{item.item}</td>
//                             <td>{item.category}</td>
//                             <td>{item.quantity}</td>
//                             <td>${item.revenue}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//             <button onClick={()=> navigate('/dashboard')}>Go to Dashboard</button>
//         </div>
//     )
// }

// export default ItemAnalytics;