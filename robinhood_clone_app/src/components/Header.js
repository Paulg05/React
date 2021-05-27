import React from "react";
import "./Header.css";
import Logo from "../robinhood.svg";

function Header() {
  return (
    <div className="header__wrapper">
      {/* logo */}
      <div className="header__logo">
        <img src={Logo} width={25} alt="robinhood icon" />
      </div>
      {/* searchbar */}
      <div className="header__searchbar">
        <div className="header__searhContainer">
          
          <input type="text" placeholder="Search" />
        </div>
      </div>
      {/* menu items */}
      <div className="header__menuItems">
        <a href="/#">Free Stocks</a>
        <a href="/#">Portfolio</a>
        <a href="/#">Cash</a>
        <a href="/#">Messages</a>
        <a href="/#">Free Stocks</a>
        <a href="/#">Accounts</a>
      </div>
    </div>
  );
}

export default Header;
