import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
 background: linear-gradient(180deg, #F5DB13 0%, #F2B807 100%);
 
 margin:0 auto;
 display:flex;
 height:100vh;
 overflow-y: hidden;
 box-shadow: 0px 4px 16px rgba(1, 28, 64, 0.2);
 `;
export const WrapperHome = styled.div`

 
 margin: 0 auto;
 margin-bottom: 200px;
 display:flex;
 align-items:center;
 width:60%;
 display:flex;
 justify-content:space-between;

 @media(max-width:1440px){
   width:90%;

 }

@media(max-width:1024px){
  h1{
    font-size:70px;
  }
  @media(max-width:1084px){
    width:100%;
    flex-direction: column;
    img{
    
      order:-1;
     
      
    }

  }
  
}


` ;

export const GroupHome = styled.section`

width:50%;
  & > h1{

font-style: normal;
font-weight: bold;
font-size: 72px;
line-height: 84px;
letter-spacing: 4px;

color: #000000;
margin-bottom:64px;

  }

  & > h2{


font-style: normal;
font-weight: normal;
font-size: 32px;
line-height: 37px;

margin-bottom:64px;
  }

  & > button{
background: #73D677;
box-shadow: inset 0px -9px 0px rgba(0, 0, 0, 0.18);
border-radius: 11px;
width: 40%;
cursor: pointer;
height:66px;


 :hover{
  background: #26b42b;
  color: white;
  color : #000000
 }

  }

  p{

text-align: center;
font-weight: bold;
font-size: 23px;
line-height: 27px;
display: flex;
align-items: center;
text-align: center;
color: #212121;
padding:10px;
justify-content: center;
  }


@media(max-width:1024px){
  h1{
    font-size:70px;
  }
  button{
    width:60%;
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
