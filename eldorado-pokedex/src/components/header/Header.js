import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/Logo.png";
import { Menu } from "./HeaderStyles";

function Header() {
  return (
    <Menu>
      <img src={Logo} alt="lets go" />
      <ul>
        <li>
          <Link to="/">
            <a href="##">Home</a>
          </Link>
        </li>
        <li>
          <Link to="/Pokedex">
            <a href="##">Pokedex</a>
          </Link>
        </li>
      </ul>
    </Menu>
  );
}

export default Header;
