import React from "react";
import SideBar from "components/side";
import { Link } from "react-router-dom";
import { AiFillHome, AiOutlineUser } from "react-icons/ai";
import Layout from "components/layout";
import P from "components/paragraph";

const Side = () => {
  const { Row } = Layout;
  const { Ul, Li } = SideBar;
  return (
    <SideBar
    position="absolute"
    top="0"
    left="0"
    width="15%"
    height="100%"
    justifyContent="flex-start"
    >
      <Row paddingTop="4rem">
        <Ul>
          <Li>
            <Link>
              <AiFillHome /> Home
            </Link>
          </Li>
          <Li>
            <Link to={""}>
              <AiOutlineUser /> Profile
            </Link>
          </Li>
        </Ul>
      </Row>
      <Row paddingTop="35rem">
        <P width="6vw" fontSize="1.5rem" lineHeight="1.4">
          Conditions d'utilisation
        </P>
        <P width="6vw" fontSize="1.5rem" lineHeight="1.4">
          Politique de confidentialité
        </P>
      </Row>
    </SideBar>
  );
};

export default Side;
