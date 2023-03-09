import styled from "styled-components";
import { theme } from "../../styles/Theme";

export const StyledSide = styled.div`
  color: ${theme.colors.primaryTextColor};
  background: ${theme.colors.navBackground};
  display: flex;
  align-content: center;
  justify-content: space-between;
  align-items: center;
  ${(props) => (props.flex ? `flex:${props.flex}` : "")};
`;
