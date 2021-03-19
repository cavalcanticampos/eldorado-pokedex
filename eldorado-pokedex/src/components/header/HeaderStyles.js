import styled from "styled-components";


export const Menu = styled.nav`
  display: flex;
  width: 100%;
  height: 93px;
  background: #f5db13;
  box-shadow: inset 0px 4px 20px 0px rgb(0 0 0 / 20%);
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
