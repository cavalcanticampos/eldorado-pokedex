import styled from "styled-components";



export const InputSearch = styled.div`


margin-left: 177px;
margin-right: 175px;

 
 display:flex;
 flex-direction:column;
 align-items:center;
 @media(max-width:998px){
   margin-left: 36.95px;
   margin-right: 36.95px;
 }

 @media(max-width:720px){
     
     margin-left: 27px;
     margin-right: 26px;
     }

 & > input{
  width: 100%;
  height: 53px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background: rgba(242, 242, 242, 1);
  box-shadow: 4px 4px 16px rgb(1 28 64 / 20%);
  border: 1px solid rgba(242, 242, 242, 1);
  border-radius: 40px;
  margin-top: 34px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: rgba(33, 33, 33, 0.8);
  padding-top: 16px;
  padding-bottom:17px;
  padding-left:31px;
  
  :hover{
      background:#e6e4e4cc;
      color:#000;
    


    }
  }

  & > button {
    height:30px;
    background: linear-gradient(180deg, #FFFFFF 30.32%, #F5F5F5 100%);
    width:10%;
    margin-top:30px;
    border: 1px solid rgba(242,242,242,1);
    border-radius:10px;
    font-size:18px;
    font-weight:bold;
    cursor: pointer;
    :hover{
      background: #cccccccc;
      color:#fff;

    }


    @media(max-width:980px){
      width:20%;
     font-size: 15px;
     }
     @media(max-width:500px){
      width:20%;
     font-size: 13px;
     }
  }

 
 
`;
