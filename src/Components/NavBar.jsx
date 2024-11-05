import React from 'react';
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
        <li><a href="#promotions">Promotions</a></li>
        <li><a href="#brands">Brands</a></li>
        <li><a href="#bestsellers">Bestsellers</a></li>
        <li><a href="#dottideals">Dotti Deals</a></li>
      </ul>
      <div className="navbar-search">
        <input type="text" placeholder="Search Product Name" />
      </div>
      <div className="navbar-icons">
        <span>🛒</span>
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
