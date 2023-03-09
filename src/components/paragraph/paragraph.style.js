import styled from "styled-components";
import { theme } from "styles/Theme";

export default styled.p`
  display: block;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 0;
  margin-right: 0;
  font-size: 1.2em;
  color: ${theme.colors.white};
  font-family: 'InterNormal';
  line-height: 1.15;
  ${(props) => (props.width ? `width:${props.width}` : "")};
  @media screen and (max-width: 1440px) {
    width: 65vw !important;
    font-size: 1.1em;
  }
  ${(props) => (props.color ? `color:${props.color}` : "")};
  ${(props) => (props.fontSize ? `font-size:${props.fontSize}` : "")};
  ${(props) => (props.lineHeight ? `line-height:${props.lineHeight}` : "")};
  ${(props) => (props.fontWeight ? `font-weight:${props.fontWeight}` : "")};
  ${(props) => (props.color ? `color:${props.color}` : "")};
`;
