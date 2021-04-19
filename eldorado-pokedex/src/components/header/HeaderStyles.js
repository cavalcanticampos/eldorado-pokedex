import styled from "styled-components";


export const Menu = styled.nav`
  display: flex;
  width: 90%;
  max-width:1125px;
  margin: 0 auto;
  height: 93px;
  background: #F5DB13;
  box-shadow: 0px 4px 16px 0px rgba(1, 28, 64, 0.2);
  align-items: center;
  justify-content: space-around;
  & > img {
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 29px;
    color: #212121;
  }
  & > ul {
    list-style: none;
    height: 45px;
    width: 657.469970703125px;
    left: 624.53515625px;
    top: 23px;
    border-radius: 0px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  & > ul  li a {
    display: block;
    text-decoration: none;
    height: 29px;
    width: 67px;
    left: 7.4609375px;
    top: 0px;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 29px;
    color: #212121;
  }
`;
