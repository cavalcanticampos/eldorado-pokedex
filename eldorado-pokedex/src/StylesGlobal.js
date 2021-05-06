import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2? family = Karla: ital, wght @ 0,300; 1,500 & display = swap');
  *{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: 'Karla', sans-serif;
  }
`;

export const ContainerGlobal = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: 100vh;
`;
