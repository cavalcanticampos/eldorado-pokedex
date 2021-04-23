import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
background: linear-gradient(180deg, #f5db13 0%, #f2b807 100%);
  display: flex;
  height: 1050px;
  justify-content: center;
  padding-top: 108px;

`;
export const WrapperHome = styled.div`
  background: linear-gradient(180deg, #f5db13 0%, #f2b807 100%);
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-content: center;
 
  & > img {
    width: 58%;
    top:0;
  }
  @media(max-width:320px){
     height:1700px;
    flex-direction:column;
       img{
         margin:0;
         width:100%;
         height:287px;
         order:-1;
       }
       
       
  }

  @media(max-width:800px){
   
         flex-direction:column;
         text-align:center;
         img{
           order:-1;
           height:593px;
           width:100%;
         }
        
       }
`;

export const GroupHome = styled.section`

  height: 557px;

  & > h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 72px;
    line-height: 84px;
    letter-spacing: 4px;
    color: #000000;
  }
  & > h2 {
    padding-top: 40px;
    padding-bottom: 40px;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 37px;
    color: #000000;
  }

  & > button {
    height: 66px;

    width: 40%;
    top: 0px;
    background: #73d676;
    box-shadow: inset 0px -9px 0px rgba(0, 0, 0, 0.18);
    border: 1px solid;
    border-radius: 11px;
    
  }
  @media(max-width:320px){
    height:100vh;
    text-align: center;
    h1{
      font-size:42px;
    }
    h2{
      font-size:24px;
    }
    button{
      width:90%;
      height:55.11px;
      padding-bottom:10px;
    }
  }
  

`;
export const StyledLink = styled(Link)`
  font-size: 23px;
  text-decoration: none;
  font-style: normal;
  font-weight: bold;
  line-height: 27px;
  align-items: center;
  text-align: center;
  color: #212121;
`;
