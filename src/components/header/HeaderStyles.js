import styled from "styled-components";
import { Link,NavLink as LinkR } from "react-router-dom";
import { colors } from "../../Colorstyles";
import { breakpoints } from "../../Breakstyles";

export const NavContainer = styled.header`
  background: ${colors.yellow};
  box-shadow: 0px 4px 16px rgba(1, 28, 64, 0.2);
  display: flex;
`;
export const NavLogo = styled.img`
  @media (max-width: 425px) {
    width: 35%;
  }
`;
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: -webkit-fill-available;
  margin: 8px 157px;

  @media (max-width: ${breakpoints.tablet}) {
    margin: 8px 25px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin: 10px 25px;
  }
`;
export const MdClose = styled.div`
  color: black;
  z-index: 9;
  width: 31px;
  height: 31px;
  cursor: pointer;
`;
export const MobileIcons = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: ${breakpoints.mobile}) {
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
  justify-content: space-around;
  width: 50%;

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`;

export const NavItem = styled.li``;
export const NavLinks = styled(LinkR)`
  text-decoration: none;
  font-size: 25px;
  color: ${colors.gold};
  cursor: pointer;
  padding-bottom: 10px;

  //&.active {
   // border-bottom: 3px solid ${colors.goldBlack};
  //}
   
  &.selected{
    border-bottom: 3px solid ${colors.goldBlack};
  }
    
  :hover {
    border-bottom: 3px solid ${colors.goldBlack};
  }
`;

export const MobileContainer = styled.div`
  background: ${colors.yellowGradient};
  box-shadow: 4px 4px 24px ${colors.shadowmob};
  border-radius: 0px 0px 16px 16px;
  width: inherit;
  height: 344px;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MobileItem = styled.p`
  font-weight: normal;
  font-size: 27px;
  line-height: 32px;
  text-align: center;
  color: ${colors.gold};
  cursor: pointer;
  margin: 8px auto;
`;
