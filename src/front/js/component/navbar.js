import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../img/alvaroponce.png";
import "../../styles/navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          <img src={logo} alt="Logo" className="navbar-logo" /> 
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink to="/bio" className="nav-link" activeClassName="active">
                Bio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/services" className="nav-link" activeClassName="active">
                Servicios
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/agenda" className="nav-link" activeClassName="active">
                Agenda
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link " activeClassName="active">
                Contacto
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
