import styled from "styled-components";
import { colors } from "../../Colorstyles";
import { useLocation, useHistory, Link } from "react-router-dom";


export const Container = styled.div`
  height: 100vh;
  @media (max-width: 998px) {
    height: auto;
    & > footer {
      position: static;
      padding-right: 22px;
      padding-left: 22px;
    }
  }
`;

export const Title = styled.div`
  margin-top: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  

  & > h3 {
    font-style: normal;
    font-weight: 400;
    font-size: 35px;
    line-height: 41px;
    text-align: center;
    display: flex;

    color: ${colors.gold};
  }
  @media (max-width: 720px) {
    margin-top: 29px;
    margin-left: 33px;
    margin-right: 26px;
  }
`;
export const StyledLinke = styled(Link)`
  text-decoration: none;
  font-style: normal;
  font-size: 17px;
  color:black;
  margin-left: 5px;
  cursor: pointer;
 
`;
