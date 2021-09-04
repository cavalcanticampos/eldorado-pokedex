import styled from "styled-components";
import { colors } from "../../../colorstyles";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px;
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  padding: 8px;
  border: solid 1px ${colors.bluegosth};

  border-radius: 8px;

  margin: 4px;
  cursor: pointer;

  :hover {
    color: white;
    background: ${colors.posion};
  }

  ${(props) =>
    props.isSelected && {
      background: "#2b2eff",
      color: "#ffff",
    }}
`;
