import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav id="navbar">
      <div className="navbar__logo">
        <a href="#">ShopShop</a>
      </div>

      <div className="navbar_menu">
        <Link to="/">Home</Link>
        <Link to="/detail/0">Detail</Link>
      </div>
    </nav>
  );
};

export default Navbar;
