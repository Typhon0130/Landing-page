import { StyledSide, StyledUl, StyledLi} from './side.style';

export default function SideBar({children, ...rest}) {
    return (
        <StyledSide {...rest} >
            {
                children
            }
        </StyledSide>
    )
}


SideBar.Ul = ({children, ...rest}) => {
  return(
      <StyledUl {...rest}>
          {
              children
          }
      </StyledUl>
  )
}

SideBar.Li = ({children, ...rest}) => {
  return(
      <StyledLi {...rest}>
          {
              children
          }
      </StyledLi>
  )
}