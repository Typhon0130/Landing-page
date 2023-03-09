import {
  StyledCard,
  StyledName,
  StyledBrand,
  StyledPrice,
  StyledRate,
  StyledCardRow
} from "./card.style";

export default function CardWrapper({ children, ...rest }) {
  return <StyledCard {...rest}>{children}</StyledCard>;
}

CardWrapper.CardRow = ({ children, ...rest }) => {
  return <StyledCardRow {...rest}>{children}</StyledCardRow>;
};

CardWrapper.Brand = ({ children, ...rest }) => {
  return <StyledBrand {...rest}>{children}</StyledBrand>;
};

CardWrapper.Name = ({ children, ...rest }) => {
  return <StyledName {...rest}>{children}</StyledName>;
};

CardWrapper.Rate = ({ children, ...rest }) => {
  return <StyledRate {...rest}>{children}</StyledRate>;
};

CardWrapper.Price = ({ children, ...rest }) => {
  return <StyledPrice {...rest}>{children}</StyledPrice>;
};