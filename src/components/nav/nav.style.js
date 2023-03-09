import styled from "styled-components";
import { theme } from "../../styles/Theme";

export const StyledNav = styled.nav`
  color: ${theme.colors.primaryTextColor};
  background: ${theme.colors.navBackground};
  display: flex;
  align-content: center;
  justify-content: space-between;
  align-items: center;
  padding-left: 1.5vw;
  padding-right: 1.5vw;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #32383D;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;
`;
