import React, { useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import styles from './Login.module.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirectToHome, setRedirectToHome] = useState(false);
  const { isLogin, login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (login(username, password)) {
      setRedirectToHome(true);
    } else {
      alert('Invalid credentials');
    }
  };

  if (isLogin || redirectToHome) {
    return <Navigate to='/' />;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Login</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Username:</label>
          <input
            className={styles.input}
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Password:</label>
          <input
            className={styles.input}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className={styles.button} type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;




















// import { useState } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { useContext } from "react";
// import { Navigate } from "react-router-dom";


// function Login() {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [redirectToHome, setRedirectToHome] = useState(false);
//     const {isLogin, login} = useContext(AuthContext);


//     const handleSubmit = (e) =>{
//         e.preventDefault();
        
//         if(login(username, password)) {
//             setRedirectToHome(true);
//         }else{
//             alert('invalid creds');
//         }
//     }
//     if(isLogin) {
//         return <Navigate to='/'/>
//     }
//     if(redirectToHome){
//         return <Navigate to='/'/>
//     }

//     return (
//         <div>
//             <h2>Login</h2>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Username:</label>
//                     <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} />
//                 </div>
//                 <div>
//                     <label>Password:</label>
//                     <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} />
//                 </div>
//                 <button type="submit">Login</button>
//             </form>
//         </div>
//     )

// }

// export default Login;