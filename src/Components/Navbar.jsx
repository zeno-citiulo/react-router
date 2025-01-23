import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">Mio Blog</h2>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/chi-siamo">Chi Siamo</Link></li>
        <li><Link to="/posts">Lista Post</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;