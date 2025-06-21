import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/home" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
        Home
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
        About
      </NavLink>
      <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
        Contact
      </NavLink>
      <NavLink to="/hooks" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
        Hooks
      </NavLink>
      <NavLink to="/login" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}> 
      Login
      </NavLink>
    </nav>
  );
};

export default Navbar;
