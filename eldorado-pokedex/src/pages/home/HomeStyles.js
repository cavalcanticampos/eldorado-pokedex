import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background: linear-gradient(180deg, #f5db13 0%, #f2b807 100%);
  display:flex;
  height: 1024px;
  max-width: 14400px;
  width: 100%;
  margin: 0 auto;
  align-items: baseline;
  justify-content: center;
`;
export const WrapperHome = styled.div`
  padding-top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  & > article {
    height: 680px;
    left: 648px;
    top: 160px;
    border-radius: 0px;
  }
`;

export const GroupHome = styled.section`
  height: 557px;
  width: 516px;
  left: 157px;
  top: 221px;
  border-radius: 0px;

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
    width: 231px;
    left: 0px;
    top: 0px;
    background: #73d676;
    box-shadow: inset 0px -9px 0px rgba(0, 0, 0, 0.18);
    border: 1px solid;
    border-radius: 11px;
     & > Link{
       text-decoration:none;
     }

    & > p {
      font-style: normal;
      font-weight: bold;
      font-size: 23px;
      line-height: 27px;
      align-items: center;
      text-align: center;
      color: #212121;
    }
  }
`;
