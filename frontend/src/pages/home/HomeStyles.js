import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../colorstyles";
import { breakpoints } from "../../breakstyles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${colors.yellowGradient};
  height: 100vh;

  @media (max-width: ${breakpoints.tablet}) {
    height: auto;
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: auto;
  }
`;
export const HeroImgFull = styled.img`
  margin-top: 18px;
  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 0;
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 7px;
  }
`;

export const HeroImg = styled.img`
  position: absolute;
  right: 0;
  top: 154px;

  @media (max-width: 1383px) {
    width: 50%;
    top: 20%;
  }
  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

export const Text = styled.p`
  font-size: 72px;
  line-height: 84px;
  letter-spacing: 4px;
  color: ${colors.goldGradient};
  margin-bottom: 64px;

  @media (max-width: 1445px) {
    font-size: 50px;
    line-height: 60px;
    letter-spacing: 3px;
    color: ${colors.goldGradient};
    margin-bottom: 30px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 25px;
    font-size: 49px;
    line-height: 45px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 8px;
    margin-bottom: 5.48px;
  }
`;

export const Paragraph = styled.p`
  letter-spacing: 2px;
  font-size: 32px;
  line-height: 37px;
  color: ${colors.goldGradient};
  margin-bottom: 64px;
  font-weight: 400;

  @media (max-width: 1445px) {
    letter-spacing: 2px;
    font-size: 32px;
    line-height: 34px;
    margin-bottom: 30px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 23px;
    line-height: 29px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    line-height: 28px;
    font-size: 24px;
    text-align: center;
    margin-bottom: 41.59px;
  }
  @media (max-width: 1220px) {
  }
`;
export const Col = styled.div`
  padding-top: 127px;
  padding-left: 157px;
  width: 50%;
  display: flex;
  display: flex;
  flex-direction: column;

  button {
    background: ${colors.green};
    box-shadow: inset 0px -9px 0px ${colors.shadowgold};
    border-radius: 11px;
    height: 66px;
    width: 231px;
    font-size: 23px;
    border: 1px solid ${colors.green};
    cursor: pointer;
    :hover {
      background: ${colors.greenBlack};
      color: ${colors.white};
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0;
    width: 80%;
    align-items: center;
    text-align: center;
    margin: 0 auto;
    padding-bottom: 61.95px;
  }

  /*  dispositivo mobile  */

  @media (max-width: ${breakpoints.mobile}) {
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-style: normal;
  font-weight: bold;
  font-size: 23px;
  line-height: 27px;
  color: ${colors.goldBlack};
`;
