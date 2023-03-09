import BrandImage from './brandimage.style';

export default function Brand ({children, ...rest}) {
    return(
        <BrandImage {...rest}>
            {
                children
            }
        </BrandImage>
    )
}