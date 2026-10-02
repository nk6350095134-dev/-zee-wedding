
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      {/* LOGO */}
      <div className="navbar-logo">
        <NavLink to="/" onClick={closeMenu}>
          ZEE <span>WEDDINGS</span>
        </NavLink>
      </div>

      {/* DESKTOP MENU */}
      <div className={`navbar-menu ${menuOpen ? "active" : ""}`}>

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
          onClick={closeMenu}
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
          onClick={closeMenu}
        >
          About
        </NavLink>

        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
          onClick={closeMenu}
        >
          Services
        </NavLink>

        <NavLink
          to="/packages"
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
          onClick={closeMenu}
        >
          Packages
        </NavLink>

        <NavLink
          to="/pre-wedding-packages"
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
          onClick={closeMenu}
        >
          Pre-Wedding
        </NavLink>

        {/* <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
          onClick={closeMenu}
        >
          Portfolio
        </NavLink> */}

        <NavLink
          to="/customers"
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
          onClick={closeMenu}
        >
          Customers
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
          onClick={closeMenu}
        >
          Contact
        </NavLink>

      </div>

      {/* MOBILE MENU BUTTON */}
      <button
        className={`menu-toggle ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

    </nav>
  );
}

export default Navbar;

