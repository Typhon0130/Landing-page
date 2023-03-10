import { theme } from "../../styles/Theme";
import styled from "styled-components";

const Button = styled.button`
  color: ${theme.colors.primaryTextColor};

  background: ${theme.colors.primary};
  border-radius: 16px;
  transition: 0.5s;
  border: none;
  border-radius: 16px;
  font-weight: 600;
  align-items: center;
  cursor: pointer;
  text-transform: none;
  outline: none;
  line-height: normal;
  padding: 14px 15.7344px 15px 16px;
  font-size: 1rem;
  font-family: "InterNormal";
  user-select: none;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  &:hover {
    background: #3c009d;
  }
  @media screen and (max-width: 1024px) {
    font-size: 18px;
  }
`;

export default Button;
