import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <img
          src={"https://cdn-icons-png.flaticon.com/512/6978/6978255.png"}
          className="logo"
          alt="Logo"
        />
        <Link to={`/`}>
          <span className="heading">ПиццаВайб</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
