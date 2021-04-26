import styled from "styled-components";

export const Container = styled.div`
   height: 100vh;
   width: 60%;
  margin: 0 auto; 
`;

export const Title = styled.div`
  margin-top: 72px;
  display: flex;
  align-items: center;
  justify-content: center;

  & > h3 {
    font-style: normal;
    font-weight: 400;
    font-size: 35px;
    line-height: 41px;
    text-align: center;

    color: #000000;
  }
`;
