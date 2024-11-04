import React from 'react';
import './NavBar.css'; 
function NavBar() {
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
        <input type="text" placeholder="Enter Product Name" />
      </div>
      <div className="navbar-icons">
        <span>🛒</span>
        <span>👤</span>
        <span>❤️</span>
      </div>
    </nav>
  );
}

export default NavBar;
