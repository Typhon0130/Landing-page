import React from "react";
import SideBar from "components/side";
import { Link } from "react-router-dom";
import { AiFillHome, AiOutlineUser } from "react-icons/ai";
import Layout from "components/layout";

const Side = () => {
  const { Row } = Layout;
  return (
    <SideBar flex="0 0 15%">
      <Row>
        <ul>
          <li>
            <Link>
              <AiFillHome /> Home
            </Link>
          </li>
          <li>
            <Link>
              <AiOutlineUser /> Profile
            </Link>
          </li>
        </ul>
      </Row>
    </SideBar>
  );
};

export default Side;
