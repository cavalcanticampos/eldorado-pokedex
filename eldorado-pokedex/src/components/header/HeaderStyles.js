import styled from "styled-components";
export const MainHeader = styled.header`
  background: #f5db13;
  box-shadow: 0px 4px 16px 0px rgba(1, 28, 64, 0.2);
`;

export const Menu = styled.nav`
  width:60%;
  height:93px;
  margin: 0 auto;
  display:flex;
  justify-content:space-between;
  align-items:center;

  ul{
    list-style:none;
    display: flex;
    align-items:center;
    justify-content:space-between;
    width:40%;
  }

  a{
    text-decoration:none;
    font-size: 25px;
    line-height: 29px;
    color:#000000;
  }
  `