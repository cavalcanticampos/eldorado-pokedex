import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import Logo from "../../assets/Logo.png"
import  './Header.css'
import {
  MobileContainer,
  MobileItem,
  Nav,
  NavContainer,
  NavLogo,
  MobileIcons,
  NavMenu,
  NavItem,
  NavLinks,
} from "./HeaderStyles";

function Header() {
  const [open, setOpen] = useState(false);
 

  return (
    <NavContainer>
      <Nav>
        <NavLogo src={Logo} alt="Logo-navbar" />

        <MobileIcons>
          <FaBars onClick={() => setOpen(!open)} />
        </MobileIcons>

        {open && (
          <>
            <MdClose
              style={{
                color: "black",
                zIndex: 9,
                width: "31px",
                height: "31px",
                cursor: "pointer",
              }}
              onClick={() => setOpen(!open)}
            />
            <MobileContainer>
              <MobileItem>
                <img
                  style={{ width: "128px", height: "51px" }}
                  src={Logo}
                  alt="pokemon-logo"
                />
              </MobileItem>
              <MobileItem>
                <NavLinks  to="/"  activeClassName="selected" >
    
                  Home
                </NavLinks>
              </MobileItem>
              <MobileItem>
                <NavLinks to="/Pokedex"  activeClassName="selected">Pokedex</NavLinks>
              </MobileItem>
            </MobileContainer>
          </>
        )}

        <NavMenu>
          <NavItem>
            <NavLinks  to="/" >
              Home
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/Pokedex" activeClassName="selected">Pokedex</NavLinks>
          </NavItem>
        </NavMenu>
      </Nav>
    </NavContainer>
  );
}

export default Header;
