import React from "react";
import { Link } from "react-router-dom";
import './Header.css'
import Logo from '../../assets/Logo.png'

function Header() {
  return (
    <nav className="container-header">
      <img src={Logo} alt="lets go" />
      <ul>
        <li>
          <Link to="/" className="link-header">Home</Link>
        </li>
        <li>
          <Link to="/Pokedex" className="link-header">Pokedex</Link>
        </li>
        <li>
          <Link to="/Legendaries" className="link-header">Legendaries</Link>
        </li>
        <li>
          <Link to="/Documentation" className="link-header">Documentation</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
