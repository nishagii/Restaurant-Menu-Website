import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
   
  const [menu, setMenu] = useState("Menu");
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.body.classList.toggle("dark-theme", !isDarkTheme);
  };

  useEffect(() => {
    // Apply the theme class on initial load based on the isDarkTheme state
    if (isDarkTheme) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [isDarkTheme]);

  return (
    <div className={`navbar ${isDarkTheme ? "dark" : ""}`}>
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>

        <li onClick={() => setMenu("Categories")} className={menu === "Categories" ? "active" : ""}>
          <a href="#explore-menu">Categories</a>
        </li>

        <li onClick={() => setMenu("About Us")} className={menu === "About Us" ? "active" : ""}>
          <Link to="/about">About Us</Link>
        </li>

        <li onClick={() => setMenu("Contact")} className={menu === "Contact" ? "active" : ""}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>

        <img
          src={isDarkTheme ? assets.light_img : assets.dark_img}
          alt="Theme toggle"
          className="theme-toggle-icon"
          onClick={toggleTheme}
        />

      </div>
    </div>
  );
};

export default Navbar;
