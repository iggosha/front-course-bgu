import React, { FC, ReactElement } from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
  searchPizza?: ReactElement;
}

const Header: FC<HeaderProps> = ({ searchPizza }) => {
  return (
    <header className="header-container">
      <Link to={`/`}>
        <img
          src={"https://cdn-icons-png.flaticon.com/512/1404/1404945.png"}
          className="logo"
          alt="Logo"
        />
      </Link>
      <Link to={`/`}>
        <span className="heading">ПиццаВайб</span>
      </Link>
      {searchPizza && <div>{searchPizza}</div>}
    </header>
  );
};

export default Header;
