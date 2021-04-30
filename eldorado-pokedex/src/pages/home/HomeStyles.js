import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background: linear-gradient(180deg, #f5db13 0%, #f2b807 100%);
`;
export const HeroImgFull = styled.img`
  
`
export const WrapperHome = styled.div`
  width: 80%;
  margin: 0 auto;
  display: block;

  & > footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 192px;
    margin-bottom: 33px;
  }

  @media (min-width: 769px) {
    /*   none img  */
    ${HeroImgFull}{
      display: none;
    }
  }
  & > ${HeroImgFull} {
    margin-top: 18px;
  }

  @media (max-width: 768px) {
    width: 95%;
    text-align: center;
    img {
      width: 100%;
    }
    footer {
      margin: 0;
      margin-top: 61.95px;
      margin-bottom: 20.05px;
      justify-content: space-around;
    }
  }
  @media (max-width:425px){
    footer {
      >h3{
        font-size:16px;
        }
     
    }
  }
`;
export const HeroImg = styled.img`

    position: absolute;
    right: 0;
    top: 17%;


`
export const GroupHome = styled.div`
  margin-top: 127px;
  width: 50%;
  flex-direction: column;

  p {
    font-size: 70px;
    line-height: 84px;
    letter-spacing: 4px;
  }
  h2 {
    margin-top: 64px;
    font-weight: normal;
    font-size: 32px;
    line-height: 37px;
  }
  button {
    margin-top: 64px;
    background: #73d677;
    box-shadow: inset 0px -9px 0px rgba(0, 0, 0, 0.18);
    border-radius: 11px;
    height: 66px;
    width: 231px;
    font-size: 23px;
    border: 1px solid #73d677;
    cursor: pointer;
    :hover {
      background: #19d521;
      color: #ffff;
    }
  }
  
  /*  dispositivo tablete  */

  @media (max-width: 1327px){
      >${HeroImg}{
          width: 60%;
      }
  }
  @media (max-width: 1063px){
    width: 85%;
      >${HeroImg}{
         display:none;
      }
  }

  
  @media (max-width: 768px) {
     width: 90%;
    text-align: center;
    margin: auto;
    h2 {
      margin: 0;
      margin-top: 6px;
    }
    button {
      margin: 0;
      margin-top: 33px;
    }
  }
   
    /*  dispositivo mobile  */

 @media (max-width:425px){
    p{
       font-size:42px;
       margin: 0;
       line-height: 53px;
    }
    h2{
      font-size:24px;
      line-height: 29px;
    }
    button{
      width: 100%;
    }
 }

`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-style: normal;
  font-weight: bold;
  font-size: 23px;
  line-height: 27px;
  color: #212121;
`;

