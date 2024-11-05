import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; 
import { useAuth } from '../config/AuthContext';
import LogoutButton from './Auth/LogoutButton';


function NavBar() {

  const { currentUser } = useAuth(); 

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Laban2Lifestyle</h1>
      </div>
      <ul className="navbar-links">
        <li><a href="#promotions">ART</a></li>
        <li><a href="#brands">COUCH</a></li>
        <li><a href="#bestsellers">TABLES</a></li>
      </ul>
      <div className="navbar-search">
        <input type="text" placeholder="Search Product Name" />
      </div>
      <div className="navbar-icons"> 
        <Link to="/cart">
         <span>🛒</span> </Link>
          <span>👤</span>
           <span>❤️</span> 
           </div>
      <div className="navbar-auth">
        {currentUser ? <LogoutButton /> : <a href="/about">Login</a>}
      </div>
    </nav>
  );
}

export default NavBar;
