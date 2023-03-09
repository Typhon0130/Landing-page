import { StyledNav} from './nav.style';

export default function Nav({children, ...rest}) {
    return (
        <StyledNav {...rest} >
            {
                children
            }
        </StyledNav>
    )
}
