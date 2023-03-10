import styled from "styled-components";
import { theme } from "styles/Theme";

export const StyledTable = styled.table`
  color: ${theme.colors.white};
  font-family: "InterNormal";
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  min-width: 100%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
 
`;

export const StyledTr = styled.tr`
  color: ${theme.colors.white};
  color: #ffffff;
  text-align: left;
  border-bottom: 1px solid #32383d;
`;

export const StyledTh = styled.th`
  padding: 4px 15px;
`;

export const StyledTd = styled.td`
  padding: 12px 15px;
`;

export const StyledTbody = styled.tbody`
  & tr {
    transition: all .3s;
    &:hover {
      background: #c7d2da;
    }
  }
`;

export const StyledThead = styled.thead`
 & tr th {
  padding-bottom: 22px;
 }
`;
