import styled from "styled-components";

const Span = styled.span`
  display: block;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #252a2e;
  border: 1px solid #32383d;
  ${(props) => (props.width ? `width:${props.width}` : "")};
  ${(props) => (props.height ? `height:${props.height}` : "")};
  ${(props) =>
    props.borderRadius ? `border-radius:${props.borderRadius}` : ""};
`;

export default Span;
