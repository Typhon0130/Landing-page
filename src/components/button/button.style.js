import { theme } from "../../styles/Theme";
import styled from "styled-components";

const Button = styled.button`
  color: ${theme.colors.primaryTextColor};
  background: ${theme.colors.primary};
  border-radius: 16px;
  transition: 0.5s;
  border: none;
  border-radius: 20px;
  font-weight: 600;
  align-items: center;
  display: flex;
  cursor: pointer;
  text-transform: none;
  line-height: normal;
  padding: 18px 20px;
  font-size: 26px;
  font-family: 'InterNormal';
  user-select: none;
  &:hover {
    background:#3C009D;
  }
`;

export default Button;
