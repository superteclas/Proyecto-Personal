import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/alvaroponce.png";
import "../../styles/navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Logo" style={{ maxHeight: "60px" }} /> 
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
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
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
              <Link to="/fotos" className="nav-link">
                Fotos
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/agenda" className="nav-link">
                Agenda
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contacto" className="nav-link">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
        
      </div>
    </nav>
  );
};


