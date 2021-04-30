import React, { useState } from 'react'
import {FaBars} from 'react-icons/fa'

import Logo from '../../assets/Logo.png'

import { Nav, NavContainer, NavLogo, MobileIcons, NavMenu,NavItem,NavLinks } from './HeaderStyles'

function Header() {

  const [open, setOpen] = useState(false);




  return (
    <NavContainer>
      <Nav>
       <NavLogo src={Logo} alt="Logo-navbar"/>

       <MobileIcons >
         <FaBars onClick={() => setOpen(!open)}/>
       </MobileIcons>
        
        <NavMenu>
          <NavItem>
            <NavLinks to="/">Home</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/Pokedex">Pokedex</NavLinks>
          </NavItem>
        </NavMenu>
      
      </Nav>
    </NavContainer>
  )
}

export default Header
