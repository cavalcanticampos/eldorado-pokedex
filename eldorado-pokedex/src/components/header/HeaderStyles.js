import styled from "styled-components";
export const MainHeader = styled.header`
  background: #f5db13;
  box-shadow: 0px 4px 16px 0px rgba(1, 28, 64, 0.2);
`;

export const Menu = styled.nav`
  display: flex;
  width: 63%;
  margin: 0 auto;
  height: 93px;
  align-items: center;
  justify-content: space-between;



  
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

    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 40%;
  }
  & > ul li a {
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
  @media (max-width: 320px) {
  text-align: center;
  flex-direction:column;
     
   

  ul{
     width:90%;
     margin-top:20px
  }

}
`;


