import { theme } from "../../styles/Theme";
import styled from "styled-components";

const BrandImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: ${theme.colors.primary};
  background: ${theme.colors.primary};
`;

export default BrandImage;
