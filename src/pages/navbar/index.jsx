import React, { useState } from "react";
import Button from "../../components/button";
import { H1 } from "../../components/header";
import Brand from "../../components/BrandImage";
import Nav from "../../components/nav";
import Span from "components/Span";

const Navbar = (flag) => {
  const [logFlag, setLogFlag] = useState(false);
  return (
    <Nav>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Brand></Brand>
        <H1 paddingLeft="20px" fontSize="1.8rem">
          Testnet Nodes
        </H1>
      </div>
      {!logFlag ? (
        <Button
          onClick={() => {
            setLogFlag(!logFlag);
            flag = logFlag;
          }}
        >
          Connector
        </Button>
      ) : (
        <Span></Span>
      )}
    </Nav>
  );
};

export default Navbar;
