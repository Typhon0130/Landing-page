import { StyledSide} from './side.style';

export default function SideBar({children, ...rest}) {
    return (
        <StyledSide {...rest} >
            {
                children
            }
        </StyledSide>
    )
}
