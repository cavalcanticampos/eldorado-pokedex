import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const NavContainer = styled.header`
  background: #f5db13;
  box-shadow: 0px 4px 16px rgba(1, 28, 64, 0.2);
`;
export const NavLogo = styled.img`
  
  @media (max-width:425px){
      width:35%;
  }
  
`;
export const Nav = styled.nav`
  width: 80%;
  height: 93px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const MobileIcons = styled.div`
  display: none;
  @media (max-width: 425px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  list-style: none;
  
  display: flex;
  align-items: center;
  justify-content:space-around;
  width: 40%;
  
  

  @media (max-width: 500px) {
    display: none;
  }
`;

export const NavItem = styled.li`
`;
export const NavLinks = styled(LinkR)`
  text-decoration: none;
  font-size: 25px;
 
  color: #000000;
  cursor: pointer;
 
`;
