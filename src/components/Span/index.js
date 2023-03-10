import StyledSpan from './span.style';

export default function Span ({children, ...rest}) {
    return(
        <StyledSpan {...rest}>
            {
                children
            }
        </StyledSpan>
    )
}