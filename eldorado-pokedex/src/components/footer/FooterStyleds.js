import styled from 'styled-components'

export const FooterMain = styled.footer`

padding-left: 156px;
    padding-right: 157px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 15px;
    background:#f2b807;

  
  & > h3 {
    font-size: 18px;
    line-height: 21px;
    color: #212121;
  }

  @media(max-width:1427px){
   
   padding-left: 130px;
 

 }
 @media(max-width:768px){
   
   padding:38px;

   & > :first-child{
      font-weight:400;
   }
 

 }
 @media(max-width:425px){
   padding:14px;
   margin:0;
   height:inherit;
   & > h3{
     font-size:16px;
   }
 }
 @media (max-width:425px){

     flex-direction:column-reverse
 
 }



 


`
