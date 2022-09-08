import LogoTitle from "../../assets/logo/InStock-Logo.svg";
import "./Header.scss";
import React from "react";
import { NavLink, Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="header">
      <Link to="/" className="header__logo--link">
        <section className="header__logo--container">
          <img
            className="header__logo"
            src={LogoTitle}
            alt="instockLogoTitle"
          />
        </section>
      </Link>

      <section className="header__contents--container">
        <section className="header__contents--left">
          <NavLink to="/warehouses" className="header__contents">
            Warehouses
          </NavLink>
        </section>
        <section className="header__contents--right">
          <NavLink to="/inventory" className="header__contents">
            Inventory
          </NavLink>
        </section>
      </section>
    </nav>
  );
};

export default Header;
