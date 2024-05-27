import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <div className={styles.navbar}>
      <NavLink
        className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}
        to='/'
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}
        to="/dashboard"
      >
        Dashboard
      </NavLink>
      <NavLink
        className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}
        to="/item-analytics"
      >
        Item Analytics
      </NavLink>
      <NavLink
        className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}
        to='/login'
      >
        Login
      </NavLink>
    </div>
  );
}

export default Navbar;






























// import { NavLink } from "react-router-dom";


// function Navbar() {
//     const dstyle = {color: 'black'};
//     const astyle = {color: 'yellow'};
//     return <div style={{display:'flex', alignItems: 'center', justifyContent:'space-around'}}>
//         <NavLink className={({isActive}) =>(isActive?{astyle}:{dstyle}) }  to='/'>Home</NavLink>
//         <NavLink to="/dashboard">Dashboard</NavLink>
//         <NavLink to="/item-analytics">ItemAnalytics</NavLink>
//         <NavLink to='/login'>Login</NavLink>
//     </div>
// }

// export default Navbar;