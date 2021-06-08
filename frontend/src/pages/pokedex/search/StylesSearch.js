import styled from 'styled-components'
import { colors } from '../../../colorstyles'

export const InputSearch = styled.div`
  margin-left: 177px;
  margin-right: 175px;

  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 998px) {
    margin-left: 36.95px;
    margin-right: 36.95px;
  }

  @media (max-width: 720px) {
    margin-left: 27px;
    margin-right: 26px;
  }

  & > input {
    width: 100%;
    height: 53px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    background: ${colors.backgroundgray};
    box-shadow: 4px 4px 16px rgb(1 28 64 / 20%);
    border: 1px solid ${colors.backgroundgray};
    border-radius: 40px;
    margin-top: 34px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: ${colors.gold};
    padding-top: 16px;
    padding-bottom: 17px;
    padding-left: 31px;

    :hover {
      background: ${colors.rockgray};
      color: ${colors.gold};
    }
  }

  & > button {
    height: 30px;
    background: linear-gradient(180deg, #ffffff 30.32%, #f5f5f5 100%);
    width: 10%;
    margin-top: 30px;
    border: 1px solid ${colors.backgroundgray};
    border-radius: 10px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    :hover {
      background: ${colors.rockgray};
      color: ${colors.gold};
    }

    @media (max-width: 980px) {
      width: 20%;
      font-size: 15px;
    }
    @media (max-width: 500px) {
      width: 20%;
      font-size: 13px;
    }
  }
`
