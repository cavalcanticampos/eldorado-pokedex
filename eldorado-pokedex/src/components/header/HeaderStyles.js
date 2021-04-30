import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const NavContainer = styled.header`
  background: #f5db13;
  box-shadow: 0px 4px 16px rgba(1, 28, 64, 0.2);
  display: flex;
`;
export const NavLogo = styled.img`
  @media (max-width: 425px){
      width:35%;
  }
  
`;
export const Nav = styled.nav`
  // width: 100%;
  // height: 93px;
  // margin: 0 auto;
  // display: flex;
  // align-items: center;
  // justify-content: space-between;


  display: flex;
  justify-content: space-between;
  width: -webkit-fill-available;
  margin: 8px 32px;
`;
export const MobileIcons = styled.div`
  display: none;
  cursor: pointer;
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

export const MobileContainer = styled.div`
  background: linear-gradient(180deg, #F5DB13 0%, #F2B807 100%);
  box-shadow: 4px 4px 24px rgba(1, 17, 38, 0.2);
  border-radius: 0px 0px 16px 16px;
  width: inherit;
  height: 344px;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  aligm-items: center;
`

export const MobileItem = styled.p`
  font-weight: normal;
  font-size: 27px;
  line-height: 32px;
  text-align: center;
  color: #000000;
  cursor: pointer;
  margin: 8px auto;
`
