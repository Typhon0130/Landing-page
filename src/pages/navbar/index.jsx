import React from 'react'
import Button from '../../components/button';
import { H1 } from '../../components/header';
import Brand from '../../components/BrandImage';
import Nav from '../../components/nav';
const Navbar = () => {
    return (
        <Nav>
            <div style={{display:'flex', alignItems:'center'}}>
                <Brand></Brand>
                <H1 paddingLeft='20px' fontSize='3.3rem'>Testnet Nodes</H1>
            </div>
            <Button>Connector</Button>
        </Nav>
    )
}

export default Navbar;