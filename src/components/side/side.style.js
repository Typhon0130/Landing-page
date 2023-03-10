import styled from "styled-components";
import { theme } from "../../styles/Theme";

export const StyledSide = styled.div`
  color: ${theme.colors.white};
  display: flex;
  flex-direction: column;
  place-content: center space-between;
  -webkit-box-pack: justify;
  -webkit-box-align: center;
  align-items: center;
  ${(props) => (props.position ? `position:${props.position}` : "")};
  ${(props) => (props.top ? `top:${props.top}` : "")};
  ${(props) => (props.left ? `left:${props.left}` : "")};
  ${(props) => (props.width ? `width:${props.width}` : "")};
  ${(props) => (props.justifyContent ? `justify-content:${props.justifyContent}` : "")};
  ${(props) => (props.flex ? `flex:${props.flex}` : "")};
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const StyledUl = styled.ul`
  color: ${theme.colors.white};
`;

export const StyledLi = styled.li`
  color: ${theme.colors.white};
  padding-bottom: 2.5rem;
  & a {
    font-family: "InterNormal";
    font-style: normal;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 25px;
    transition: 0.3s;
    :hover {
      color: #3c009d;
    }
  }
`;
