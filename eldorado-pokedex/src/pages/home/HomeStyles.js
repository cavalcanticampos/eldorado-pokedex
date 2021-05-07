import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  background: linear-gradient(180deg, #f5db13 0%, #f2b807 100%);
  display: flex;
  flex-direction: column;
  height: 100vh;

  & > footer {
    margin: 0;
    margin-top: 61.95px;
    margin-bottom: 20.05px;
    justify-content: space-around;
  }
  @media (max-width:425px){
    height: auto;
  }
`
export const HeroImgFull = styled.img`
   margin-top:18px;
  @media(min-width: 769px){
    
      display: none;
    
  }
   
  @media(max-width: 768px){
   
   margin-top:0
  } 

  @media(max-width: 425px){
    margin-top: 7px
  }


  `

export const HeroImg = styled.img`
  position: absolute;
  right: 0;
  top: 17%;

  @media(max-width:1427px){
   
  width: 50%;
  top: 20%;
 
 }
  @media (max-width:768px){
    display: none;
  }
  
`

export const Text = styled.p`
  font-size: 72px;
  line-height: 84px;
  color: #000000;
  margin-bottom:64px;
 
  
  @media(max-width:1427px){
   
    font-size: 45px ;
    line-height: 55px; 
    margin-bottom:30px;
  

  }
  @media(max-width: 768px){
     margin-bottom:6px;
     font-size:45px;
     line-height: 55px
  }
  @media(max-width: 425px){
   margin-top:8px;
   margin-bottom:5.48px;
  }

`

export const Paragraph = styled.p`
  font-size: 32px;
  line-height: 37px;
  color: #000000;
  margin-bottom:64px;
  font-weight:400;

  @media(max-width:1427px){
   
   font-size: 29px ;
   line-height: 35px;
   margin-bottom:30px; 

 }
  @media(max-width: 768px){
     font-size: 24px;
     line-height:28px;
  }

  @media(max-width: 425px){
    line-height: 28px;
    font-size: 24px;
    text-align: center;
    margin-bottom: 41.59px;
  }




`
export const Col = styled.div`
  margin-top: 127px;
  margin-left: 157px;
  width: 40%;
  display: flex;
  flex-direction: column;

  button {
   

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

    @media(max-width: 425px){
      margin-bottom: 28px;
    }
  }

  /*  dispositivo tablete  */
 
  @media(max-width:1427px){
    
   
   margin-left:130px;
 

 }
 @media(max-width:768px){
  margin: 0;
    width: 80%;
    align-items: center;
    text-align: center;
    margin: 0 auto;
}
 


  

  /*  dispositivo mobile  */

  @media (max-width: 425px) {
    
  }
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-style: normal;
  font-weight: bold;
  font-size: 23px;
  line-height: 27px;
  color: #212121;
`
