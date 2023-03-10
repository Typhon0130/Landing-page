import { theme } from "../../styles/Theme";
import styled from "styled-components";

export const StyledCard = styled.div`
  font-family: "PlayNormal";
  position: relative;
  color: ${theme.colors.white};
  background: ${theme.colors.primary};
  flex: 0 0 20%;
  padding: 30px;
  gap: 28px;
  background: #3c009d;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  text-align: start;
  box-shadow: rgb(56 47 197 / 89%) 0px 10px 20px, rgb(0 0 0 / 23%) 0px 6px 6px;
  transition: 0.4s;
  &:hover {
    box-shadow: rgba(240, 46, 170, 0.4) 5px 5px,
      rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px,
      rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px;
  }
  @media screen and (max-width: 1440px) {
    flex: 0 0 50%;
  }
  @media screen and ( max-width: 400px ) {
    padding: 20px;
  }
`;

export const StyledName = styled.p`
  font-family: "PlayNormal";
  margin-left: 12px;
  font-size: 2.25rem;
  font-style: normal;
  line-height: 43px;
  font-weight: 700;
`;

export const StyledBrand = styled.div`
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background: ${theme.colors.white};
  transition: 0.3s all;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;

export const StyledRate = styled.p`
  font-weight: 400;
  font-size: 32px;
  line-height: 48px;
  padding-bottom: 28px;
`;

export const StyledPrice = styled.p`
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
`;

export const StyledCardRow = styled.div`
  padding: 35px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 45px;
  column-gap: 115px;
  @media screen and (max-width: 1260px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 880px) {
    grid-template-columns: 1fr;
  }
`;