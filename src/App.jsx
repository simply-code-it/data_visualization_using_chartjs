import './App.css'
import {Routes, Route} from 'react-router-dom';
import Login from './components/Login'
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import ItemAnalytics from './components/ItemAnalytics';

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={
          <Home/>
      }/>
      <Route path="/dashboard" element={
        <PrivateRoute>
          <Dashboard/>
        </PrivateRoute>
      }/>
      <Route path="/item-analytics" element={
        <PrivateRoute>
          <ItemAnalytics/>
        </PrivateRoute>
      }/>

      <Route path="/login" element={<Login/>}/>
    </Routes>
    </>
  )
}

export default App
