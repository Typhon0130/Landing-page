import styled from "styled-components";

export const StyledLayout = styled.section`
  ${(props) => (props.flex ? `flex:${props.flex}` : "")};
  ${(props) => (props.width ? `width:${props.width}` : "")};
  ${(props) => (props.paddingTop ? `padding-top:${props.paddingTop}` : "")};
  ${(props) => (props.paddingBottom ? `padding-bottom:${props.paddingBottom}` : "")};
  ${(props) => (props.paddingLeft ? `padding-left:${props.paddingLeft}` : "")};
  @media screen and (max-width: 1024px) {
    padding-left: 0%;
  }
`;

export const StyledContainer = styled.div`
  margin: auto;
  text-align: center;
`;

export const StyledRow = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  ${(props) => (props.alignItems ? `align-items:${props.alignItems}` : "")};
  ${(props) => (props.display ? `display:${props.display}` : "")};
  ${(props) => (props.textAlign ? `text-align:${props.textAlign}` : "")};
  ${(props) =>
    props.backgroundImage
      ? `background: no-repeat url(${props.backgroundImage})`
      : ""};
  background-size: cover;
  ${(props) =>
    props.justifyContent ? `justify-content:${props.justifyContent}` : ""};
  ${(props) =>
    props.flexDirection ? `flex-direction:${props.flexDirection}` : ""};
  ${(props) => (props.paddingLeft ? `padding-left:${props.paddingLeft}` : "")};
  ${(props) =>
    props.paddingRight ? `padding-right:${props.paddingRight}` : ""};
  ${(props) => (props.paddingTop ? `padding-top:${props.paddingTop}` : "")};
  ${(props) =>
    props.paddingBottom ? `padding-bottom:${props.paddingBottom}` : ""};
  ${(props) => (props.marginTop ? `margin-top:${props.marginTop}` : "")};
  ${(props) => (props.marginLeft ? `margin-left:${props.marginLeft}` : "")};
`;

export const StyledColumn = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  ${(props) => (props.display ? `display:${props.display}` : "")};
  ${(props) => (props.width ? `width:${props.width}` : "")};
  ${(props) => (props.height ? `height:${props.height}` : "")};
  ${(props) => (props.paddingLeft ? `padding-left:${props.paddingLeft}` : "")};
  @media screen and (max-width: 1440px) {
    width: 100vw;
  }
`;
