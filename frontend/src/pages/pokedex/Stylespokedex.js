import styled from "styled-components";
import { colors } from "../../Colorstyles";

export const Container = styled.div`
  height: 100vh;
  @media (max-width: 998px) {
    height: auto;
    & > footer {
      position: static;
      padding-right: 22px;
      padding-left: 22px;
    }
  }
`;

export const Title = styled.div`
  margin-top: 44px;
  display: flex;
  align-items: center;
  justify-content: center;

  & > h3 {
    font-style: normal;
    font-weight: 400;
    font-size: 35px;
    line-height: 41px;
    text-align: center;

    color: ${colors.gold};
  }
  @media (max-width: 720px) {
    margin-top: 29px;
    margin-left: 33px;
    margin-right: 26px;
  }
`;
