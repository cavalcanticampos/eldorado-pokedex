import styled from "styled-components";
import { colors } from "../../colorstyles";
import { breakpoints } from "../../breakstyles";

export const FooterMain = styled.footer`
  width: 100%;
  bottom: 0;
  display: flex;
  padding-bottom: 20px;
  position: fixed;
  padding-left: 157px;
  padding-right: 156px;
  align-items: center;
  justify-content: space-between;

  & > h3 {
    font-size: 18px;
    line-height: 21px;
    color: ${colors.goldBlack};
  }

  span {
    padding: 5px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    position: static;
    height: auto;
    margin-top: 0;
    padding-left: 44px;
    padding-right: 44px;
    display: flex;
    align-items: center;
    padding-bottom: 15px;

    justify-content: space-between;

    & > :first-child {
      font-weight: 400;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column-reverse;
    padding: 14px;
    margin: 0;
    height: inherit;
    & > h3 {
      font-size: 16px;
    }
  }
  @media (max-width: ${breakpoints.mobile}) {
  }
`;
