import React, { useState } from "react";
import Button from "../../components/button";
import { H1 } from "../../components/header";
import Brand from "../../components/BrandImage";
import Nav from "../../components/nav";
import Layout from "components/layout";
import {AiOutlineLogout} from "react-icons/ai";
import Span from "components/Span";

const Navbar = (flag) => {
  const [logFlag, setLogFlag] = useState(false);
  const { Column } = Layout;
  return (
    <Nav>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Brand></Brand>
        <H1 paddingLeft="20px" fontSize="2.3rem">
          Testnet Nodes
        </H1>
      </div>
      {!logFlag ? (
        <Button
          onClick={() => {
            setLogFlag(!logFlag);
            flag = logFlag;
            console.log(flag);
          }}
        >
          Connector
        </Button>
      ) : (
        <Column>
        <Span></Span>
        <Button>
            <AiOutlineLogout />
        </Button>
        </Column>
      )}
    </Nav>
  );
};

export default Navbar;
