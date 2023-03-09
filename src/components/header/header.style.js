import styled from "styled-components";
import { theme } from "../../styles/Theme";

export const H1Wrapper = styled.h1`
  color: ${theme.colors.white};
  font-size: 4rem;
  line-height: 1.2;
  font-family: "InterNormal";
  ${(props) => (props.fontSize ? `font-size:${props.fontSize}` : "")};
  ${(props) =>
    props.letterSpacing ? `letter-spacing:${props.letterSpacing}` : ""};
  ${(props) => (props.color ? `color:${props.color}` : "")};
  ${(props) => (props.paddingLeft ? `padding-left:${props.paddingLeft}` : "")};
  ${(props) => (props.fontSize ? `font-size:${props.fontSize}` : "")};
  ${(props) => (props.lineHeight ? `line-height:${props.lineHeight}` : "")};
  ${(props) => (props.fontWeight ? `font-weight:${props.fontWeight}` : "")};
`;

export const H2Wrapper = styled.h2`
  font-size: 1.5em;
`;

export const H3Wrapper = styled.h3`
  font-size: 1em;
`;

export const H4Wrapper = styled.h4`
  font-size: 1.33em;
`;

export const H5Wrapper = styled.h5`
  font-size: 0.83em;
`;

export const H6Wrapper = styled.h6`
  font-size: 0.67rem;
`;
