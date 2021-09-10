import styled from "styled-components";
import { colors } from "../../../Colorstyles";

export const ContainerCard = styled.div`
  margin-left: 158px;
  margin-right: 157px;
  margin-top: 24px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 998px) {
    margin-left: 22px;
    margin-right: 22px;
  }
  @media (max-width: 720px) {
    margin-left: 20px;
    margin-right: 19.34px;
  }
`;

export const WrapperCards = styled.div`
  width: 30%;
  margin: 1%;
  height: 136.86px;
  border-radius: 16px;
  box-shadow: 4px 4px 4px 0px ${colors.goldBlack} 10%;
  display: flex;
  @media (max-width: 998px) {
    width: 48%;
  }
  @media (max-width: 720px) {
    width: 100%;
  }
`;

export const CardSkill = styled.div`
  display: flex;
  flex-direction: column;
  background: ${colors.lightgray};
  width: 35%;
  padding-left: 25.95px;

  @media (max-width: 1383px) {
    padding-left: 2px;
  }
  @media (max-width: 998px) {
    padding-left: 25.95px;
  }

  @media (max-width: 368px) {
    padding-left: 6.95px;
  }
`;
export const CardsTitle = styled.h3`
  font-size: 18px;
  line-height: 21px;
  color: ${colors.goldBlack};
  text-shadow: 4px 4px 4px rgba(33, 33, 33, 0.1);

  @media (max-width: 1585px) {
    font-size: 13px;
  }
`;
export const CardsPropContainer = styled.div`
  display: flex;

  padding-top: 12.1px;

  & > :nth-child(1) {
    margin-right: 12.97px;

    @media (max-width: 1383px) {
      margin-right: 2.97px;
    }
    @media (max-width: 998px) {
      margin-right: 12.97px;
    }
  }

  & > :nth-child(2) {
    margin-right: 2.74px;
  }

  & > span {
    
    height: 36.04px;
    width: 37.95px;
    border: 3px solid ${colors.goldBlack};
    box-sizing: border-box;
    border-radius: 95px;
    font-size: 15px;
    color: ${colors.goldBlack};
    display: flex;
    justify-content:center;
    align-items:center;
  }
`;
export const CardSkillItems = styled.div`
margin-top: 5.94px;
  margin-bottom: 10.95px;
  & > span {
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: ${colors.blackgray};
    padding-bottom: 3px;

    @media (max-width: 1585px) {
      font-size: 9px;
    }
    @media (max-width: 998px) {
      font-size: 12px;
    }
  }
  & > :nth-child(1) {
    margin-right: 7.57px;
  }
`;

export const CardTag = styled.div`
  display: flex;

  & > span {
    background: ${(props) =>
      props.pokeTypeColor ? props.pokeTypeColor : "#73d677"};
    box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.18);
    border-radius: 11px;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: ${(props) => (props.josaph ? props.josaph : "#212121")};
    // color: #212121;
    width: 60px;
    padding: 3px;
  }

  & > :nth-child(1) {
    margin-right: 12.97px;
  }
`;

export const CardImg = styled.div`
  & > :nth-child(1) {
    height: 100%;
    width: 100%;
  }

  width: 70%;
  text-align: center;
  background: ${(props) => props.backgroundColor};
  border-radius: 0px 8px 8px 0px;
`;
