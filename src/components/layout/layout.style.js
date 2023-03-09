import styled from "styled-components";
import { device } from "../../styles/BreakPoints";

export const StyledLayout = styled.section`
${(props) => (props.gridColumnStart ? `grid-column-start:${props.gridColumnStart}` : "")};
${(props) => (props.gridColumnEnd ? `grid-column-end:${props.gridColumnEnd}` : "")};
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
  ${(props) => (props.gridTemplateColumns ? `grid-template-columns:${props.gridTemplateColumns}` : "")};
  ${(props) => (props.gap ? `gap:${props.gap}` : "")};
`;

export const StyledColumn = styled.div`
  display: flex;
  flex-direction: row;
  align-itme: center;
`;
