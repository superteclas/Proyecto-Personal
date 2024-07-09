import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/alvaroponce.png";
import "../../styles/navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Logo" className="navbar-logo" /> 
        </Link>
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
              <Link to="/bio" className="nav-link">
                Bio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link">
                Servicios
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/agenda" className="nav-link">
                Agenda
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
