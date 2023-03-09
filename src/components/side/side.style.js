import styled from "styled-components";
import { theme } from "../../styles/Theme";

export const StyledSide = styled.div`
  color: ${theme.colors.white};
  background: ${theme.colors.navBackground};
  display: flex;
  align-content: center;
  justify-content: space-between;
  align-items: center;
  ${(props) => (props.flex ? `flex:${props.flex}` : "")};
`;

export const StyledUl = styled.ul`
color: ${theme.colors.white}
`
export const StyledLi = styled.li`
color: ${theme.colors.white}
`
