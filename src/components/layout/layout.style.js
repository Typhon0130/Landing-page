import styled from "styled-components";
import { device } from "../../styles/BreakPoints";

export const StyledLayout = styled.section`
${(props) => (props.flex ? `flex:${props.flex}` : "")};
`;

export const StyledContainer = styled.div`
  margin: auto;
  text-align: center;
`;

export const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  align-tiems: center;
  ${(props) => (props.display ? `display:${props.display}` : "")};
  ${(props) => (props.textAlign ? `text-align:${props.textAlign}` : "")};
  ${(props) => (props.backgroundImage ? `background: no-repeat url(${props.backgroundImage})` : "")};
  background-size: cover;
  ${(props) => (props.gridTemplateColumns ? `grid-template-columns:${props.gridTemplateColumns}` : "")};
  ${(props) => (props.gap ? `gap:${props.gap}` : "")};
  ${(props) => (props.flexDirection ? `flex-direction:${props.flexDirection}` : "")};
`;

export const StyledColumn = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-itme: center;
  ${(props) => (props.display ? `display:${props.display}` : "")};
  ${(props) => (props.width ? `width:${props.width}` : "")};
  ${(props) => (props.paddingLeft ? `padding-left:${props.paddingLeft}` : "")};
`;
