import { StyledTable, StyledTd, StyledTh, StyledTr, StyledTbody, StyledThead } from './table.style';

export default function Table ({children, ...rest}) {
    return(
        <StyledTable {...rest}>
            {
                children
            }
        </StyledTable>
    )
}

Table.Tr = ({children, ...rest}) => {
    return(
        <StyledTr {...rest}>
            {
                children
            }
        </StyledTr>
    )
}

Table.Th = ({children, ...rest}) => {
    return(
        <StyledTh {...rest}>
            {
                children
            }
        </StyledTh>
    )
}

Table.Td = ({children, ...rest}) => {
    return(
        <StyledTd {...rest}>
            {
                children
            }
        </StyledTd>
    )
}

Table.Tbody = ({children, ...rest}) => {
    return(
        <StyledTbody {...rest}>
            {
                children
            }
        </StyledTbody>
    )
}

Table.Thead = ({children, ...rest}) => {
    return(
        <StyledThead {...rest}>
            {
                children
            }
        </StyledThead>
    )
}